import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'app/app-routing.module';

// bootstrap
import { ButtonsModule } from 'ng2-bootstrap';

// services
import { AuthService } from 'app/services/auth.service';
import { AuthGuardService } from 'app/services/authGuard.service';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
