import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user = null;
  authenticationFormHidden = true;
  errorMessage = '';
  successMessage = '';
  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit() {
    this.authService.userObservable.subscribe((x) => (this.user = x));
  }

  toggleAuthentication = () => {
    this.authenticationFormHidden = !this.authenticationFormHidden;
  };

  tryRegister = (value) => {
    console.log(value);
    this.authService.doRegister(value).then(
      (res) => {
        console.log(res);
        this.authenticationFormHidden = true;
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  };

  tryLoggingIn = (value) => {
    console.log(value);
    this.authService.doLoggingIn(value).then(
      (res) => {
        console.log(res);
        this.authenticationFormHidden = true;
        this.errorMessage = '';
        this.successMessage = 'Successfully connected to your account';
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  };

  logOut = () => {
    this.authService.logOut().then(
      (res) => {
        this.authenticationFormHidden = true;
        this.user = null;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };
}
