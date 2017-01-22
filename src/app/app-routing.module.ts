import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { HomeComponent } from 'app/home/home.component';

// authGuard
import { AuthGuardService } from 'app/services/authGuard.service';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
