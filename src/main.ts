/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { LangService } from './app/services/lang.service';

// Fonction pour charger la langue au démarrage
export function loadLanguage(langService: LangService) {
  return () => {
    const savedLang = localStorage.getItem('language') || 'fr';
    document.documentElement.lang = savedLang;
    langService.changeLanguage(savedLang as 'fr' | 'en' | 'ar');
  };
}

// Initialisation de l'application
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LangService),
    {
      provide: APP_INITIALIZER,
      useFactory: loadLanguage,
      deps: [LangService],
      multi: true
    }
  ]
}).catch(err => console.error(err));
