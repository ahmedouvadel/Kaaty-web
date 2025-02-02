import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { InviteListComponent } from './invite-list/invite-list.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { HomeComponent } from "../pages/home/home.component";

const routes: Routes = [
  { path: '', component: ReservationFormComponent },
  { path: 'invites', component: InviteListComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  declarations: [
    ReservationFormComponent,
    InviteListComponent,
    QrCodeComponent,
    PaiementComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HomeComponent
]
})
export class ReservationModule { }