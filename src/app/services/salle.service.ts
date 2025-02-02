import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Salle } from '../models/salle.model';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private salles: Salle[] = [
    {
      id: 1,
      nom: 'Salle Royale',
      description: 'Une salle majestueuse pour votre mariage de rêve, avec une vue panoramique sur la ville',
      capacite: 300,
      prix: 5000,
      images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'],
      equipements: ['Climatisation', 'Sonorisation', 'Parking', 'Cuisine équipée', 'Espace DJ'],
      disponibilites: [
        '2025-03-01',
        '2025-03-08',
        '2025-03-15',
        '2025-03-22'
      ]
    },
    {
      id: 2,
      nom: 'Salle Élégance',
      description: 'L\'élégance à l\'état pur pour votre célébration, dans un cadre raffiné et moderne',
      capacite: 200,
      prix: 3500,
      images: ['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'],
      equipements: ['Climatisation', 'Cuisine équipée', 'Wifi', 'Scène surélevée', 'Vestiaire'],
      disponibilites: [
        '2025-03-02',
        '2025-03-09',
        '2025-03-16',
        '2025-03-23'
      ]
    }
  ];

  getSalles(): Observable<Salle[]> {
    return of(this.salles);
  }

  getSalleById(id: number): Observable<Salle | undefined> {
    return of(this.salles.find(salle => salle.id === id));
  }
}