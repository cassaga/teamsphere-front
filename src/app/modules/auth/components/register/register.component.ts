import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class RegisterComponent {

  hide = true;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', [Validators.required, Validators.email]]
  });

  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', [Validators.required, Validators.minLength(6)]]});

  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required]
  });

  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required]
  });



  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
