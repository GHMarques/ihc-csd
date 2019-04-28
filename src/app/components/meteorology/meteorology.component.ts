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
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Intensidade de Chuva', 
      
      /*
        esses 4 atributos devem ser alterados.
        Cada coluna corresponde a um indice de cada vetor, nesse caso temos duas colunas coloridas
          a de indice 0 de ciano e a de indice 1 de magenta
        No hover, ambas estao cinza
        Falta adicionar os outros  indices, com a progressao de cores correta para cada um
      */
      backgroundColor: ['rgba(0, 200, 200, 1)', 'rgba(200, 0, 200, 1)'],
      borderColor: ['rgba(0, 200, 200, 1)', 'rgba(200, 0, 200, 1)'],
      hoverBackgroundColor: ['rgba(150, 150, 150, 1)', 'rgba(150, 150, 150, 1)'],
      hoverBorderColor: ['rgba(150, 150, 150, 1)', 'rgba(150, 150, 150, 1)']
    }
  ];

  constructor() {
    moment.locale('pt-br');  
   }

  ngOnInit() {
  }
}
