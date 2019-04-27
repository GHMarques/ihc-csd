import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br'
@Component({
  selector: 'app-meteorology',
  templateUrl: './meteorology.component.html',
  styleUrls: ['./meteorology.component.scss']
})
export class MeteorologyComponent implements OnInit {
  danger = ['assets/green.svg','assets/yellow.svg','assets/red.svg']
  days = [
    {'day': moment(new Date().setDate(new Date().getDate() + 1 )).utc().format('L'), 'danger': this.danger[0]},
    {'day': moment(new Date().setDate(new Date().getDate() + 2 )).utc().format('L'), 'danger': this.danger[0]},
    {'day': moment(new Date().setDate(new Date().getDate() + 3 )).utc().format('L'), 'danger': this.danger[1]},
    {'day': moment(new Date().setDate(new Date().getDate() + 4 )).utc().format('L'), 'danger': this.danger[2]},
    {'day': moment(new Date().setDate(new Date().getDate() + 5 )).utc().format('L'), 'danger': this.danger[2]},
    {'day': moment(new Date().setDate(new Date().getDate() + 6 )).utc().format('L'), 'danger': this.danger[1]}
  ] 
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',color: [
      'red',    // color for data at index 0
      'blue',   // color for data at index 1
      'green',  // color for data at index 2
      'black',  // color for data at index 3
  ]},

  ];
  constructor() {
    moment.locale('pt-br');  
   }

  ngOnInit() {
  }

}
