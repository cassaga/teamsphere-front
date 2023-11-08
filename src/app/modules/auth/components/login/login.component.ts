import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule, RouterLink],


})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide : boolean = true;
  hovered : boolean = false;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hover(){
    this.hovered = true;
  }
}
