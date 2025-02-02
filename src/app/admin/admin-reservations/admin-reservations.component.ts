import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-reservations',
  template: `
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-6">Gestion des Réservations</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salle</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- Exemple de réservation -->
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">1</td>
              <td class="px-6 py-4 whitespace-nowrap">Salle Royale</td>
              <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td class="px-6 py-4 whitespace-nowrap">2025-03-15</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Confirmé
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button class="text-blue-600 hover:text-blue-800 mr-2">Détails</button>
                <button class="text-red-600 hover:text-red-800">Annuler</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AdminReservationsComponent { }