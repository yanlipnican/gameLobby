import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'app/home/home-routing.module';

// components
import { HomeComponent } from 'app/home/home.component';
import { HeaderComponent } from 'app/home/header/header.component';
import { AboutComponent } from 'app/home/about/about.component';

@NgModule({
  declarations: [
      HomeComponent,
      AboutComponent,
      HeaderComponent,
  ],
  imports: [
    HomeRoutingModule,
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule { }
