import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  authorized: Boolean = false;
  token: String = null;

  constructor(private router: Router) {
  }

  authorize(email: String, password: String): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      if (email === 'janko') {
        resolve(true);
        this.authorized = true;
        this.token = 'someShittoken';
      } else {
        resolve(false);
        this.authorized = false;
      }
    });
  }

  isAuthorized(): Boolean {
    return this.authorized;
  }

  logOut() {
    this.authorized = false;
    this.router.navigate(['/login']);
  }

}
