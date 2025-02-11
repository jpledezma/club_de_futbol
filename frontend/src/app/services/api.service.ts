import { HttpClient } from '@angular/common/http';
import { computed, effect, Injectable, signal, Signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly serverResponseSignal = signal<any | null>(null);
  static readonly serverUrl: string = 'http://localhost:3000';

  get serverResponse() {
    return this.serverResponseSignal();
  }
  constructor(private http: HttpClient) {
    effect(() => {
      const response = this.serverResponseSignal();
      if (response) {
        console.log('Respuesta del servidor:', response);
      }
    });
 }

 fetchServerResponse() {
  this.http.get<any>(`${ApiService.serverUrl}/`)
    .subscribe({
      next: (response) => this.serverResponseSignal.set(response),
      error: (err) => console.error('Error al obtener la respuesta del servidor:', err)
    });
}

}
 