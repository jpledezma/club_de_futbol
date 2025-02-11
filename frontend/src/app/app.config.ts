import { ApplicationConfig,  importProvidersFrom,  provideExperimentalZonelessChangeDetection,  provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule), 
  provideExperimentalZonelessChangeDetection(),
  provideRouter(routes, withComponentInputBinding()),
  provideHttpClient(withFetch()),]
};
