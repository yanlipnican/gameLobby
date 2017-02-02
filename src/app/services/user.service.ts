import { Injectable} from '@angular/core';
import { AuthService } from 'app/services/auth.service';

import { API_PATH } from 'app/app.constants';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  public user: User;

  constructor(private auth: AuthService) {}

  /**
   * Fetches user info and returns Observable and sets UserService.user
   */
  fetchUserInfo(): Observable<User> {
    const observable = this.auth.tokenRequestObservable(API_PATH.USER_PROFILE).map(user => new User(user));
    observable.subscribe(user => this.user = user);
    return observable;
  }

}

export interface IUser {
  name: String;
  id: Number;
  bio: String;
}

export class User implements IUser {
  name: String;
  id: Number;
  bio: String;

  constructor(data: IUser) {
    this.name = data.name;
    this.id = data.id;
    this.bio = data.bio;
  }
}