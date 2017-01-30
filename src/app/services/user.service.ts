import { Injectable} from '@angular/core';
import { AuthService } from 'app/services/auth.service';

import { API_PATH } from 'app/app.constants';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  public user: IUser;

  constructor(private auth: AuthService) {}

  fetchUserInfo(): Promise<IUser> {
    return this.fetchUserInfoObservable().toPromise();
  }

  getUserInfo(): Promise<IUser> {
    return this.auth.tokenRequest(API_PATH.USER_PROFILE);
  }

  /**
   * Fetches user info and returns Observable and sets UserService.user
   */
  fetchUserInfoObservable(): Observable<IUser> {
    const observable = this.auth.tokenRequestObservable(API_PATH.USER_PROFILE);
    observable.subscribe(user => this.user = user);
    return observable;
  }

}

export interface IUser {
  name: String;
  id: Number;
  password: String;
  bio: String;
}