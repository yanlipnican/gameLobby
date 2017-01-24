import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [routerTransition()],
  host : {'[@routerTransition]': ''},
})
export class LoginComponent implements OnInit {

  emailInput: String;
  passwordInput: String;
  errorMessage: String;

  isError: Boolean = false;
  loading: Boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuthorized()) {
      this.router.navigate(['/home']);
    }
  }

  submit() {
    this.loading = true;

    this.auth.logIn(this.emailInput, this.passwordInput).then((isAuthorized) => {
      if (isAuthorized) {
        this.router.navigate(['/home']);
      } else {
        this.isError = true;
        this.errorMessage = 'User name or password is invalid.';
      }
      this.loading = false;
    }).catch(this.handleError.bind(this));

  }

  handleError(err) {
    console.error('Login', err);
    this.isError = true;
    this.errorMessage = 'Unable to reach server.';
    this.loading = false;
  }

  onKeyHandler() {
    this.isError = false;
  }

}
