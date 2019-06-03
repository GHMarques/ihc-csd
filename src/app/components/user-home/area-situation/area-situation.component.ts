import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
@Component({
  selector: 'app-area-situation',
  templateUrl: './area-situation.component.html',
  styleUrls: ['./area-situation.component.scss']
})
export class AreaSituationComponent implements OnInit {

  map: any;
  draw: any;
  showMap = 0;
  danger = ['assets/green.svg','assets/yellow.svg','assets/red.svg'];
  today = {
    'day': moment(new Date()).utc().format('LLLL'), 
    'danger': this.danger[0],
    'info': 'Chuva moderadada de aproximadamente 20 minutos'  };
  days = [
    { 'day': moment(new Date().setDate(new Date().getDate() + 1 )).utc().format('L'),
      'danger': this.danger[0],
      'longDate': moment(new Date().setDate(new Date().getDate() + 1 )).utc().format('LLLL'), 
      'info': 'Chuva leve de aproximadamente 15 minutos'} ,
    {'day': moment(new Date().setDate(new Date().getDate() + 2 )).utc().format('L'),
     'danger': this.danger[0],
     'longDate': moment(new Date().setDate(new Date().getDate() + 2 )).utc().format('LLLL'), 
     'info': 'Chuva leve de aproximadamente 20 minutos'},
    {'day': moment(new Date().setDate(new Date().getDate() + 3 )).utc().format('L'),
      'danger': this.danger[1],
      'longDate': moment(new Date().setDate(new Date().getDate() + 3 )).utc().format('LLLL'), 
      'info': 'Chuva moderada com chances de relâmpagos'},
    {'day': moment(new Date().setDate(new Date().getDate() + 4 )).utc().format('L'), 
      'danger': this.danger[2],
      'longDate': moment(new Date().setDate(new Date().getDate() + 4 )).utc().format('LLLL'), 
      'info': 'Grande quantidade de relâmpagos e alto volume de chuva'},
    {'day': moment(new Date().setDate(new Date().getDate() + 5 )).utc().format('L'),
      'danger': this.danger[2],
      'longDate': moment(new Date().setDate(new Date().getDate() + 5 )).utc().format('LLLL'), 
      'info': 'Tempestade com relâmpagos e ventos de até 80km/h'},
    {'day': moment(new Date().setDate(new Date().getDate() + 6 )).utc().format('L'),
      'danger': this.danger[1],
      'longDate': moment(new Date().setDate(new Date().getDate() + 6 )).utc().format('LLLL'), 
      'info': 'Chuva forte sem ventos'}
  ] 
  constructor() { 
    moment.locale('pt-br');  
  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2htYXJxdWVzIiwiYSI6ImNqdXp0YWJnczFibGYzeXJ2empwem91b28ifQ.1m8Dtl9e1xtBrUgzVYHSmg';
  
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
      center: [-43.999111399648655, -19.939165045090476], // starting position
      zoom: 17 // starting zoom
      });
    
      this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
      polygon: true,
      trash: true
      }
    });

    this.map.on('load', function (map) {
      map.target.addLayer({
        'id': 'riskArea',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [{
              'type': 'Feature',
              'properties': {
                'name': 'CEFET - Campus 2',
                'risk': '1'
              },
              'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                  [-43.999200, -19.938327],
                  [-43.999200, -19.938700],
                  [-43.998803, -19.938700],
                  [-43.998819, -19.938327]]]
              }
            }, {
              'type': 'Feature',
              'properties': {
                'name': 'CEFET - Campus 1',
                'risk': '2'
              },
              'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                  [-43.977809, -19.929904],
                  [-43.977711, -19.930382],
                  [-43.976471, -19.930202],
                  [-43.976649, -19.929681]]]
              }
              }]
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#ff0000',
          'fill-opacity': 0.3
        }
      });

      map.target.on('mouseenter', 'riskArea', function () {
        map.target.getCanvas().style.cursor = 'pointer';
      });

      map.target.on('mouseleave', 'riskArea', function () {
        map.target.getCanvas().style.cursor = '';
      });

      map.target.on('click', 'riskArea', function (e) {
        //console.log(e.features[0]);
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<b>Nome:</b> ' + e.features[0].properties.name + '<br/>' + '<b>Situação: </b>' + e.features[0].properties.risk)
        .addTo(map.target);
        });
    });

    // this.map.addControl(new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   localGeocoder: this.forwardGeocoder,
    //   zoom: 14,
    //   placeholder: "Pesquise no MapBox",
    //   mapboxgl: mapboxgl
    // }));
      
    // this.map.addControl(this.draw);
      
    // this.map.on('draw.create', this.updateArea);
    // this.map.on('draw.delete', this.updateArea);
    // this.map.on('draw.update', this.updateArea);
  }
  
  updateArea(e) {
  }

  forwardGeocoder(query) {
  }

  changeDay(day){  
    this.today.day = day.longDate;
    this.today.danger = day.danger; 
    this.today.info = day.info; 
  }

  handleMap(event){
    this.showMap = event.index;
    //console.log(this.showMap)
  }
}
