import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  title: string = $localize`Kaaty`;
  isDrawerOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document, private langService: LangService) {}

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  /* changeLanguage(event: Event, lang: 'fr' | 'en' | 'ar') {
    event.preventDefault();
    this.langService.changeLanguage(lang);
    window.location.reload();
  } */

  changeLanguage(event: Event, lang: 'fr' | 'en' | 'ar') {
    event.preventDefault();
    this.langService.changeLanguage(lang);
  }
}
