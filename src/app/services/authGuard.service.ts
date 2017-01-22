import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate() {
      if (!this.auth.isAuthorized()) {
          this.router.navigate(['/login']);
          return false;
      }

      return true;
  }

}
