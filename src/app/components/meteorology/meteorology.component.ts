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

  quantity = 9
  colors = [];
  hoverColors = [];
  barDatas = []; //[28, 48, 40, 19, 86, 27, 90];

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  //barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];
  barChartLabelsHours = [];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data: [], 
      label: 'Intensidade de Chuva', 
      /*
        esses 4 atributos devem ser alterados.
        Cada coluna corresponde a um indice de cada vetor, nesse caso temos duas colunas coloridas
          a de indice 0 de ciano e a de indice 1 de magenta
        No hover, ambas estao cinza
        Falta adicionar os outros  indices, com a progressao de cores correta para cada um
      */
      backgroundColor: [], //['rgba(0, 200, 200, 1)', 'rgba(200, 0, 200, 1)'],
      borderColor: [], //['rgba(0, 200, 200, 1)', 'rgba(200, 0, 200, 1)'],
      hoverBackgroundColor: [], //['rgba(150, 150, 150, 1)', 'rgba(150, 150, 150, 1)'],
      hoverBorderColor: [] //['rgba(150, 150, 150, 1)', 'rgba(150, 150, 150, 1)']
    }
  ];

  constructor() {
    moment.locale('pt-br');  
   }

  ngOnInit() {
    this.setBarDatas();
    this.initLabelHours(this.barChartLabelsHours);
    this.createColors(this.barChartData[0]);
  }

  setBarDatas() {
    for (let i=0; i<this.quantity; i++) {
      this.barDatas.push(Math.round(Math.random()*10));
    }

    this.barChartData[0].data = this.barDatas;
  }

  initLabelHours(label) {
    let begin = -Math.floor((this.quantity/2));
    for (let i=0; i<this.quantity; i++) {
      let hour = moment(new Date().setHours(new Date().getHours() + (begin+i) )).local().format('LT');
      console.log(hour);
      console.log(begin+i)
      label.push(hour);
    }
  }

  createColors(chart) {
    let min = 50;
    let max = 220;

    let r = 0;
    let g = min;
    let b = min;
    
    let datas = chart.data
    let n = datas.length
    for (let i=0; i<n; i++) {
      let val = min + (max - min)*(datas[i]/n);
      g = b = val;
      this.colors.push('rgba('+r+', '+g+', '+b+', 1)');
      r = g = b = min;
      this.hoverColors.push('rgba('+r+', '+g+', '+b+', 1)');
    }

    chart.backgroundColor = this.colors;
    chart.borderColor = this.colors;
    chart.hoverBackgroundColor = this.hoverColors;
    chart.hoverBorderColor = this.hoverColors;
  }
}
