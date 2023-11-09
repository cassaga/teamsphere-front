import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-forgotten-password',
  styleUrls: ['./forgotten-password.component.scss'],
  templateUrl: './forgotten-password.component.html',
  imports: [
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule
  ],
  standalone: true
})
export class ForgottenPasswordComponent implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer l'email du paramètre de l'URL
    this.route.queryParams.subscribe((queryParams) => {
      this.email = queryParams['email'] || '';
    });
  }

  emailIsValid(email: string): boolean {
    // Ajoutez ici la logique de validation d'email si nécessaire
    // Par exemple, vous pouvez utiliser une expression régulière ou une autre méthode de validation.
    // Retournez true si l'email est valide, sinon false.
    return true; // Changez cela en fonction de votre logique de validation réelle.
  }

  onSubmit() {
    // Vous pouvez ici envoyer les données à un service ou effectuer d'autres actions avec elles.
    console.log('Email:', this.email);
  }
}
