import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private _activeLang!: 'fr' | 'en' | 'ar';

  constructor() {
    this.checkActiveLang();
  }

  get activeLang() {
    return this._activeLang;
  }

  private checkActiveLang() {
    const savedLang = localStorage.getItem('language');

    if (savedLang) {
      this._activeLang = savedLang as 'fr' | 'en' | 'ar';
    } else {
      this._activeLang = window.navigator.language.includes('fr') ? 'fr' : 'ar';
      localStorage.setItem('language', this._activeLang);
    }
  }

  changeLanguage(lang: 'fr' | 'en' | 'ar') {
    if (this._activeLang !== lang) {
      this._activeLang = lang;
      localStorage.setItem('language', lang);

      // 🔥 Recharge la page avec la nouvelle langue
      window.location.href = `/${lang}/`;
    }
  }
}
