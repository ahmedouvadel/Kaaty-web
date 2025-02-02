import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  standalone: false,
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent {

  constructor(private router: Router) {}

  effectuerPaiement() {
    // Simuler le paiement
    setTimeout(() => {
      this.router.navigate(['/reservation/confirmation']);
    }, 1500);
  }

}
