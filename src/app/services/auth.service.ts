import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { API_ADDRESS, API_PATH, LOCALSTORAGE_TOKEN_KEY } from 'app/app.constants';
import { Path } from 'app/app.helpers';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private authorized: boolean = false;
  token: string = null;

  private storage = localStorage; // storage type

  private removeToken(): void {
    this.token = null;
    this.authorized = false;
    this.storage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }

  private saveToken(token): void {
    this.token = token;
    this.storage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
  }

  private getToken(): boolean {
    const token = this.storage.getItem(LOCALSTORAGE_TOKEN_KEY);
    if (token) {
      this.authorized = true;
      this.token = token;
      return true;
    } else {
      return false;
    }
  }

  constructor(private router: Router, private http: Http) {
    this.getToken();
  }

  logIn(userName: string, password: string): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.post(Path.join([API_ADDRESS, API_PATH.LOGIN]), { name: userName, password: password })
        .map((res: Response) => res.json())
        .toPromise()
        .then(res => {
          if (res.token) {
            this.saveToken(res.token);
            this.authorized = true;
            resolve(true);
          } else {
            this.authorized = false;
            resolve(false);
          }
        }).catch(err => {
          console.error('Login', err);
          reject(err);
        });

    });

  }

  isAuthorized(): boolean {
    return this.authorized;
  }

  logOut(): void {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  /**
   * Makes request to api with Authorization header and returns promise.
   */
  tokenRequest(path: string, data: Object = {}): Promise<any> {

    const headers = new Headers;
    headers.append('Authorization', `Bearer ${this.token}`);

    return this.http.post(Path.join([API_ADDRESS, path]), data, { headers: headers })
      .map(res => res.json())
      .toPromise();

  }

}
