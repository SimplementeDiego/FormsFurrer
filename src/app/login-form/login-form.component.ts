import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  title = 'Register Reactive Forms';

  register = false;

  registerForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  delay = (ms:any) => new Promise(res => setTimeout(res, ms));

  loginUser = async () => {

    console.warn(this.registerForm.value);
    this.register = true;
    await this.delay(5000);
    this.register = false;
    this.registerForm.reset();

  };

  get user() {
    return this.registerForm.get('user');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get number() {
    return this.registerForm.get('number');
  }

}
