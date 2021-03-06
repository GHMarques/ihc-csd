import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-info-risk-area',
  templateUrl: './info-risk-area.component.html',
  styleUrls: ['./info-risk-area.component.scss']
})
export class InfoRiskAreaComponent implements OnInit {

  danger = ['assets/green.svg','assets/yellow.svg','assets/red.svg'];
  today = {
    'day': moment(new Date()).utc().format('LLLL'), 
    'danger': this.danger[0]};
  days = [
    {'day': moment(new Date().setDate(new Date().getDate() + 1 )).utc().format('L'), 'danger': this.danger[0]},
    {'day': moment(new Date().setDate(new Date().getDate() + 2 )).utc().format('L'), 'danger': this.danger[0]},
    {'day': moment(new Date().setDate(new Date().getDate() + 3 )).utc().format('L'), 'danger': this.danger[1]},
    {'day': moment(new Date().setDate(new Date().getDate() + 4 )).utc().format('L'), 'danger': this.danger[2]},
    {'day': moment(new Date().setDate(new Date().getDate() + 5 )).utc().format('L'), 'danger': this.danger[2]}
  ] 
  constructor() { 
    moment.locale('pt-br');  
  }

  ngOnInit() {
  }

}
