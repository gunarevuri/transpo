import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import {FormsModule} from '@angular/forms';
import { HomeTransporterComponent } from './home/home-transporter/home-transporter.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    routingComponents,
    HomeTransporterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey:"key"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
