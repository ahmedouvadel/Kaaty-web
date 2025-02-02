import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-list',
  standalone: false,
  templateUrl: './invite-list.component.html',
  styleUrl: './invite-list.component.css'
})
export class InviteListComponent {

  invitesForm!: FormGroup;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    private router: Router
  ) {
    this.invitesForm = this.fb.group({
      invites: this.fb.array([])
    });

    // Ajouter le premier invité par défaut
    this.ajouterInvite();
  }

  get invites() {
    return this.invitesForm.get('invites') as FormArray;
  }

  ajouterInvite() {
    const inviteForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.invites.push(inviteForm);
  }

  onSubmit() {
    if (this.invitesForm.valid) {
      // Sauvegarder la liste des invités
      this.router.navigate(['/reservation/paiement']);
    }
  }

}
