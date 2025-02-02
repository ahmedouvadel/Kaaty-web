import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionnaire-dashboard',
  template: `
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-white shadow-lg">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <h1 class="text-2xl font-bold text-blue-600">Gestionnaire Dashboard</h1>
            <div class="space-x-4">
              <a routerLink="./reservations" 
                 routerLinkActive="text-blue-600"
                 class="hover:text-blue-600">Réservations</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class GestionnaireDashboardComponent { }