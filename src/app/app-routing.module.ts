import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
<<<<<<< HEAD
import { AreaSituationComponent } from './components/area-situation/area-situation.component';
=======
import { CreateRiskAreaComponent } from './components/create-risk-area/create-risk-area.component';
>>>>>>> 2b1546429f8376c43d54c5e859047c6570f2fd9b

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'user-home', component: UserHomeComponent },
<<<<<<< HEAD
  { path: 'area-situation', component: AreaSituationComponent },
  
=======
  { path: 'create-risk-area', component: CreateRiskAreaComponent },
>>>>>>> 2b1546429f8376c43d54c5e859047c6570f2fd9b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
