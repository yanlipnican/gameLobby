import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [routerTransition()],
  host : {'[@routerTransition]': ''},
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private auth: AuthService ) { }

  ngOnInit() {

    // // checks if user is logged in
    // if (!this.auth.isAuthorized()) {
    //   this.router.navigate(['/login']);
    // }

  }

}
