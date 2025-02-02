import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GestionnaireDashboardComponent } from './gestionnaire-dashboard/gestionnaire-dashboard.component';
import { GestionnaireReservationsComponent } from './gestionnaire-reservations/gestionnaire-reservations.component';

@NgModule({
  declarations: [
    GestionnaireDashboardComponent,
    GestionnaireReservationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GestionnaireDashboardComponent,
        children: [
          { path: 'reservations', component: GestionnaireReservationsComponent },
          { path: '', redirectTo: 'reservations', pathMatch: 'full' }
        ]
      }
    ])
  ]
})
export class GestionnaireModule { }