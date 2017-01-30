import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService, IUser } from 'app/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { USER_FETCH_LOADING_START, USER_FETCH_LOADING_STOP } from 'app/reducers/loading.reducer';
import { AppState } from 'app/services/state.service';

/**
 * Fetches user info, and then it can load route
 */
@Injectable()
export class UserResolver implements Resolve<IUser>{


  constructor(private userService: UserService, private store: Store<AppState>) {}

  resolve(): Observable<IUser> {

      this.store.dispatch({ type: USER_FETCH_LOADING_START });

      const observable = this.userService.fetchUserInfoObservable();
      observable.subscribe(() => this.store.dispatch({ type: USER_FETCH_LOADING_STOP }));

      return observable;
  }
}