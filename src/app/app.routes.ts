import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalleDetailComponent } from './pages/salle-detail/salle-detail.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'salle/:id', component: SalleDetailComponent },
  /* { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, */
  { 
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: 'gestionnaire',
    loadChildren: () => import('./gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule)
  },
  { 
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
  }
];