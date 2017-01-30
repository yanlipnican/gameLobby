import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {

  private loading: Boolean = false;
  private error: string;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

}
