import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

// components
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { LandingComponent } from 'app/landing/landing.component';
import { ChartsComponent } from 'app/charts/charts.component';
// authGuard
import { AuthGuardService } from 'app/services/authGuard.service';
// resolve data and then access route
import { UserResolver } from 'app/services/user.resolve';
const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', loadChildren : 'app/home/home.module#HomeModule', resolve: { user: UserResolver }, canActivate: [AuthGuardService]},
    { path: 'charts', component : ChartsComponent },
    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
