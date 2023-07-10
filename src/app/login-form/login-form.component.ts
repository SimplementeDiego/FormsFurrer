import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  title = 'Login Reactive Forms';

  loginForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.pattern('[[0-9]+]')]),
  });

  loginUser() {
    console.warn(this.loginForm.value);
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get number() {
    return this.loginForm.get('number');
  }
}
