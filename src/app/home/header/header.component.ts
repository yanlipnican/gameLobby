import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }

}
