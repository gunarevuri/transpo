import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration/registration.component';
import { HomeComponent } from './home/home/home.component';
import { HomeUserComponent } from './home/home-user/home-user.component';
import { EvidencesComponent } from './registration/evidences/evidences.component';
import { HomeTransporterComponent } from './home/home-transporter/home-transporter.component';
import { TransportComponent } from './transport/transport.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent,
  children:[
    { path:'user',component:HomeUserComponent},
    { path:'transporter',component:HomeTransporterComponent}
  ]},
  
  { path: 'evidences',component:EvidencesComponent},
  { path: '',component:RegistrationComponent},
  { path:'transport',component:TransportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
 export const  routingComponents=[HomeComponent,HomeUserComponent,EvidencesComponent];