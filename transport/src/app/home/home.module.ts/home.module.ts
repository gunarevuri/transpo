import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {AppModule} from '../../app.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppModule,
    AgmCoreModule.forRoot({
      apiKey:'Api Key',
      libraries:['places']
    })
  ]
})
export class HomeModule{}
