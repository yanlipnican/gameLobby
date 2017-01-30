import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'app/home/home-routing.module';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from 'app/home/home.component';
import { HeaderComponent } from 'app/home/header/header.component';
import { AboutComponent } from 'app/home/about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// bootstrap
import { Ng2BootstrapModule, ButtonsModule, DropdownModule, AlertModule } from 'ng2-bootstrap';
import { TodosComponent } from './todos/todos.component';

// services
import { TodoService } from 'app/services/todo.service';

@NgModule({
  declarations: [
      HomeComponent,
      AboutComponent,
      HeaderComponent,
      UserProfileComponent,
      TodosComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    // bootstrap
    DropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
  ],
  providers: [
    TodoService,
  ],
})
export class HomeModule { }
