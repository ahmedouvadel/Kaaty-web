import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SalleService } from '../../services/salle.service';
import { Salle } from '../../models/salle.model';

@Component({
  selector: 'app-salle-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 py-8" *ngIf="salle">
      <div class="container mx-auto px-4">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img [src]="salle.images[0]" 
               [alt]="salle.nom"
               class="w-full h-96 object-cover">
          
          <div class="p-8">
            <h1 class="text-4xl font-bold mb-4">{{salle.nom}}</h1>
            <p class="text-gray-600 text-lg mb-8">{{salle.description}}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="text-xl font-semibold mb-4">Informations</h3>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Capacité: {{salle.capacite}} personnes</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prix: {{salle.prix}} €</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-semibold mb-4">Équipements</h3>
                <ul class="grid grid-cols-2 gap-2">
                  <li *ngFor="let equip of salle.equipements" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{equip}}
                  </li>
                </ul>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="text-xl font-semibold mb-4">Dates Disponibles</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button *ngFor="let date of salle.disponibilites"
                        (click)="selectDate(date)"
                        [class.bg-blue-600]="selectedDate === date"
                        [class.text-white]="selectedDate === date"
                        class="p-3 text-center rounded-lg border border-gray-200 hover:border-blue-600 transition duration-300">
                  {{date | date:'dd/MM/yyyy'}}
                </button>
              </div>
            </div>

            <div class="text-center">
              <button (click)="reserver()"
                      [disabled]="!selectedDate"
                      class="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                Réserver cette salle
              </button>
              <p *ngIf="!selectedDate" class="text-gray-500 mt-2">
                Veuillez sélectionner une date pour réserver
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SalleDetailComponent implements OnInit {
  salle?: Salle;
  selectedDate?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salleService: SalleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.salleService.getSalleById(id).subscribe(
        salle => this.salle = salle
      );
    });
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }

  reserver() {
    if (!this.selectedDate) {
      return;
    }
    
    // Rediriger vers la page de connexion avec les paramètres de réservation
    this.router.navigate(['/login'], {
      queryParams: {
        salleId: this.salle?.id,
        date: this.selectedDate,
        returnUrl: `/salle/${this.salle?.id}`
      }
    });
  }
}