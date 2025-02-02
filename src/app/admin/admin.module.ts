import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent,
    AdminReservationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminDashboardComponent,
        children: [
          { path: 'users', component: UserManagementComponent },
          { path: 'reservations', component: AdminReservationsComponent },
          { path: '', redirectTo: 'reservations', pathMatch: 'full' }
        ]
      }
    ])
  ]
})
export class AdminModule { }