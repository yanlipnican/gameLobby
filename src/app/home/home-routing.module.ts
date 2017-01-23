import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/home/about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'about', component: AboutComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
