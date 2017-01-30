import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/home/about/about.component';
import { UserProfileComponent } from 'app/home/user-profile/user-profile.component';
import { TodosComponent } from 'app/home/todos/todos.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'about', component: AboutComponent },
        { path: 'profile', component: UserProfileComponent },
        { path: 'todos', component: TodosComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
