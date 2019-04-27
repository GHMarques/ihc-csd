import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AreaSituationComponent } from './components/area-situation/area-situation.component';
import { CreateRiskAreaComponent } from './components/create-risk-area/create-risk-area.component';
import { MeteorologyComponent } from './components/meteorology/meteorology.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'area-situation', component: AreaSituationComponent },
  { path: 'create-risk-area', component: CreateRiskAreaComponent },
  { path: 'meteorology', component: MeteorologyComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
