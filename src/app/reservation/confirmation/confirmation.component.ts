import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {

  ngOnInit() {
    // Générer les QR codes pour chaque invité
    this.genererQRCodes();
  }

  genererQRCodes() {
    // Logique de génération des QR codes
  }

  telechargerQRCodes() {
    // Logique de téléchargement des QR codes
  }

  renvoyerEmails() {
    // Logique de renvoi des emails
  }

}
