import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AreaSituationComponent } from './components/user-home/area-situation/area-situation.component';
import { CreateRiskAreaComponent } from './components/create-risk-area/create-risk-area.component';
import { ListRiskAreaComponent } from './components/list-risk-area/list-risk-area.component';
import { InfoRiskAreaComponent } from './components/info-risk-area/info-risk-area.component';
import { MeteorologyComponent } from './components/meteorology/meteorology.component';
import { ConfigComponent } from './components/config/config.component';
import { SetRiskAreaComponent } from './components/set-risk-area/set-risk-area.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'area-situation', component: AreaSituationComponent },
  { path: 'create-risk-area', component: CreateRiskAreaComponent },
  { path: 'list-risk-area', component: ListRiskAreaComponent },
  { path: 'info-risk-area/:id', component: InfoRiskAreaComponent },
  { path: 'meteorology', component: MeteorologyComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'set-risk-area', component: SetRiskAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
