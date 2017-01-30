import { Component, state } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  loading: boolean = false;

  constructor(private store: Store<AppState>) {
    this.store.select(state => state.loadingState).subscribe(s => {
      this.loading = s.userFetch;
    });
  }
}
