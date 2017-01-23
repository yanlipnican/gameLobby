import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthService {

  private API_ADDRESS: string = 'http://localhost:4201';

  private authorized: Boolean = false;
  token: String = null;

  private LOCALSTORAGE_TOKEN_KEY: string = '__Token_gameLobby'; // token key in storage
  private storage = localStorage; // storage type

  private removeToken() {
    this.token = null;
    this.authorized = false;
    this.storage.removeItem(this.LOCALSTORAGE_TOKEN_KEY);
  }

  private saveToken(token) {
    this.storage.setItem(this.LOCALSTORAGE_TOKEN_KEY, token);
  }

  private getToken(): Boolean {
    const token = this.storage.getItem(this.LOCALSTORAGE_TOKEN_KEY);
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

  logIn(userName: String, password: String): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.API_ADDRESS + '/api/login', { name: userName, password: password }, )
      .map((res: Response) => res.json())
      .subscribe(res => {
          if (res.token) {
            this.token = res.token;
            this.saveToken(res.token);
            this.authorized = true;
            resolve(true);
          } else {
            this.authorized = false;
            resolve(false);
          }
        },
        err => {
          reject(err);
        });
    });
  }

  isAuthorized(): Boolean {
    return this.authorized;
  }

  logOut() {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  tokenRequest(path: string, data: Object = {}): Promise<any>{
    const headers = new Headers;
    headers.append('Authorization', `Bearer ${this.token}`);

    return new Promise((resolve, reject) => {
      this.http.post(`${this.API_ADDRESS}${path}`, data, { headers: headers }).map(res => res.json()).subscribe(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      });
    });
  }

}
