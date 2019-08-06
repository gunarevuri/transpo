import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { EvidencesComponent } from '../app/registration/evidences/evidences.component';
import { HomeComponent } from './home/home/home.component';
import { HomeUserComponent } from '../app/home/home-user/home-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EvidencesComponent,
    HomeComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
