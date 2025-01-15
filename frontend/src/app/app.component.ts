import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  message: string = '';

  constructor(private apiService:ApiService){}

  ngOnInit() {
    this.apiService.getMessage().subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
}
