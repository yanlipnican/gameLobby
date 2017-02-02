import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { UserService, User} from 'app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor( private auth: AuthService, private userService: UserService ) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  logOut() {
    this.auth.logOut();
  }


}
