import {Component} from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


})
export class LoginComponent {

log = false;
reg = false;

    login() {
      this.log = !this.log;
      this.reg = false;
    }

    register() {
      this.reg = !this.reg;
      this.log = false;
    }

    constructor() {
    }



}
