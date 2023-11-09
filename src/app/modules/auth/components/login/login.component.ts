import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule, RouterLink],


})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password: string = ''; // Ajouter une propriété pour le mot de passe

  constructor(private router: Router) {}

  onForgotPasswordClick() {
    // Naviguer vers la page "Mot de passe oublié" avec l'email comme paramètre
    this.router.navigate(['/forgotten-password'], {
      queryParams: { email: this.email.value },
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email address';
    }
    return this.email.hasError('email') ? 'Not a valid email address' : '';
  }

  onSubmit() {
    // Vous pouvez ici envoyer les données à un service ou effectuer d'autres actions avec elles.
    console.log('Email:', this.email.value);
    console.log('Password:', this.password);
  }
}
