import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Salle } from '../../models/salle.model';
import { Router } from '@angular/router';
import { SalleService } from '../../services/salle.service';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {
  
  reservationForm!: FormGroup;
  salle?: Salle;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    private router: Router,
    private salleService: SalleService
  ) {
    this.reservationForm = this.fb.group({
      nombreInvites: ['', [Validators.required, Validators.min(1)]],
      cameraman: [false],
      buvette: [false],
      decoration: [false],
      notes: ['']
    });
  }

  ngOnInit() {
    // Récupérer les détails de la salle depuis le service
    const salleId = 1; // À récupérer depuis la route
    this.salleService.getSalleById(salleId).subscribe(
      salle => this.salle = salle
    );
  }

  calculerTotal(): number {
    if (!this.salle) return 0;
    
    let total = this.salle.prix;
    
    if (this.reservationForm.value.cameraman) total += 500;
    if (this.reservationForm.value.buvette) total += 300;
    if (this.reservationForm.value.decoration) total += 400;
    
    return total;
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      // Sauvegarder les données du formulaire dans un service
      this.router.navigate(['/reservation/invites']);
    }
  }

}
