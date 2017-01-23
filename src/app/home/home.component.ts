import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [routerTransition()],
  host : {'[@routerTransition]': ''},
})
export class HomeComponent implements OnInit {

  private loading: Boolean = true;
  private error: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUserInfo().then(() => {
      this.loading = false;
    }).catch(err => {
      this.error = 'Unable to fetch data.';
      this.loading = false;
      console.error('DataFetch - HomeComponent', err);
    });
  }

}
