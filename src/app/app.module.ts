import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.module.material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AreaSituationComponent } from './components/user-home/area-situation/area-situation.component';
import { CreateRiskAreaComponent } from './components/create-risk-area/create-risk-area.component';
import { MeteorologyComponent } from './components/meteorology/meteorology.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './services/chat.service';
import { CoolStorageModule } from '@angular-cool/storage';

import { ListRiskAreaComponent } from './components/list-risk-area/list-risk-area.component';
import { InfoRiskAreaComponent } from './components/info-risk-area/info-risk-area.component';
import { ConfigComponent } from './components/config/config.component';
import { SetRiskAreaComponent } from './components/set-risk-area/set-risk-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    AdminHomeComponent,
    UserHomeComponent,
    AreaSituationComponent,
    CreateRiskAreaComponent,
    MeteorologyComponent,
    ChatComponent,
    ListRiskAreaComponent,
    InfoRiskAreaComponent,
    ConfigComponent,
    SetRiskAreaComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    ColorPickerModule,
    ChartsModule,
    CoolStorageModule,
    MatTableModule
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
