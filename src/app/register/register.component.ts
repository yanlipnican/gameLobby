import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  animations: [routerTransition()],
  host : {'[@routerTransition]': ''},
})
export class RegisterComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit() {

  }

}
