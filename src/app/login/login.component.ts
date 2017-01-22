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
  isError: Boolean = false;
  errorMessage: String;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuthorized()) {
      this.router.navigate(['/home']);
    }
  }

  submit() {
    this.auth.authorize(this.emailInput, this.passwordInput).then((isAuthorized) => {
      if (isAuthorized) {
        this.router.navigate(['/home']);
      } else {
        this.isError = true;
        this.errorMessage = 'User name or password is invalid.';
      }
    });
  }

  onKeyHandler() {
    this.isError = false;
  }

}
