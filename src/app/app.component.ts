import { Component } from '@angular/core';
import { NavComponent } from "./pages/home/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavComponent],
  template: `
  <app-nav></app-nav>
  `
})
export class AppComponent {
  title = 'Réservation de Salles de Mariage';
}