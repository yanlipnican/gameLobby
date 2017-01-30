import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'app/app-routing.module';
import { StoreModule } from '@ngrx/store';

// bootstrap
import { Ng2BootstrapModule, ButtonsModule, DropdownModule, AlertModule } from 'ng2-bootstrap';

// services
import { AuthService } from 'app/services/auth.service';
import { AuthGuardService } from 'app/services/authGuard.service';
import { UserService } from 'app/services/user.service';
import { UserResolver } from 'app/services/user.resolve';

// reducers
import { LoadingReducer } from 'app/reducers/loading.reducer';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({
      // reducers
      loadingState: LoadingReducer,
    }),
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
    UserResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

