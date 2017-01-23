import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from 'app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}