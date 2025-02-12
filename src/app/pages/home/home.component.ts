import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SalleService } from '../../services/salle.service';
import { Salle } from '../../models/salle.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4" i18n="@@home-title">Trouvez la Salle de Mariage Parfaite</h1>
        <p class="text-xl mb-8" i18n="@@home-subtitle">Des salles exceptionnelles pour votre jour exceptionnel</p>
      </div>
    </div>

    <!-- Salles Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let salle of salles" 
             class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img [src]="salle.images[0]" 
               [alt]="salle.nom"
               class="w-full h-56 object-cover">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">{{salle.nom}}</h2>
            <p class="text-gray-600 mb-4">{{salle.description}}</p>
            <div class="mb-4">
              <div class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span i18n="@@salle-capacity">{{salle.capacite}} personnes</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                </svg>
                <span>{{salle.prix}} €</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500" i18n="@@salle-dates">{{salle.disponibilites.length}} dates disponibles</span>
              <a [routerLink]="['/salle', salle.id]" 
                 class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300" i18n="@@salle-details-link">
                Voir détails
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  salles: Salle[] = [];

  constructor(private salleService: SalleService) {}

  ngOnInit() {
    this.salleService.getSalles().subscribe(
      salles => this.salles = salles
    );
  }
}