import { ApplicationConfig,  importProvidersFrom,  provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),]
};
