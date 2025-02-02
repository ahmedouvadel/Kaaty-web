import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  template: `
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-6">Gestion des Utilisateurs</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- Exemple d'utilisateur -->
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">1</td>
              <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td class="px-6 py-4 whitespace-nowrap">johnexample.com</td>
              <td class="px-6 py-4 whitespace-nowrap">Gestionnaire</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button class="text-blue-600 hover:text-blue-800 mr-2">Éditer</button>
                <button class="text-red-600 hover:text-red-800">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class UserManagementComponent { }