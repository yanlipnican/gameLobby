import { Injectable} from '@angular/core';
import { AuthService } from 'app/services/auth.service';

import { API_PATH } from 'app/app.constants';

@Injectable()
export class UserService {

  public user: IUser;

  constructor(private auth: AuthService) {}

  fetchUserInfo(): Promise<IUser> {

    return new Promise((resolve, reject) => {

      this.getUserInfo().then(user => {
        this.user = user;
        resolve(user);
      }).catch(err => {
        reject(err);
      });

    });

  }

  getUserInfo(): Promise<IUser> {
    return this.auth.tokenRequest(API_PATH.USER_PROFILE);
  }

}

export interface IUser {
  name: String;
  id: Number;
  password: String;
  bio: String;
}