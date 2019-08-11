import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration/registration.component';
import { HomeComponent } from './home/home/home.component';
import { HomeUserComponent } from './home/home-user/home-user.component';
import { EvidencesComponent } from './registration/evidences/evidences.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'home/user',component:HomeUserComponent},
  { path: 'evidences',component:EvidencesComponent},
  { path: '',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
 export const  routingComponents=[HomeComponent,HomeUserComponent,EvidencesComponent];