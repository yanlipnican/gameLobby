import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'app/app-routing.module';

// bootstrap
import { Ng2BootstrapModule, ButtonsModule, DropdownModule, AlertModule } from 'ng2-bootstrap';

// services
import { AuthService } from 'app/services/auth.service';
import { AuthGuardService } from 'app/services/authGuard.service';
import { UserService } from 'app/services/user.service';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // bootstrap
    DropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
