import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-set-risk-area',
  templateUrl: './set-risk-area.component.html',
  styleUrls: ['./set-risk-area.component.scss']
})
export class SetRiskAreaComponent implements OnInit {

  public map: any;
  public draw: any;
  public lat: number;
  public lng: number;
  constructor() { }
  riskAreaForm = new FormGroup({
    area: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit() {
    this.lat = -43.999111399648655;
    this.lng = -19.938555045090476;
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2htYXJxdWVzIiwiYSI6ImNqdXp0YWJnczFibGYzeXJ2empwem91b28ifQ.1m8Dtl9e1xtBrUgzVYHSmg';
    /* eslint-disable */
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
      center: [this.lat, this.lng], // starting position
      zoom: 17// starting zoom
      });
    /* eslint-disable */
    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
      polygon: true,
      trash: true
      }
    });

    this.map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      localGeocoder: this.forwardGeocoder,
      zoom: 14,
      placeholder: "Pesquise no MapBox",
      mapboxgl: mapboxgl
    }));
      
    this.map.addControl(this.draw);
      
    this.map.on('draw.create', this.updateArea);
    this.map.on('draw.delete', this.updateArea);
    this.map.on('draw.update', this.updateArea);
    
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
  }

  updateArea(e) {}

  
  forwardGeocoder(query) {
    var matchingFeatures = [];
    return matchingFeatures;
  }

  changeCenter(e){
    if(e.value == 1){
      this.lat = -43.999111399648655;
      this.lng = -19.938555045090476;
    } else {
      this.lat = -43.977683;
      this.lng = -19.930298;
    }
    
    this.map.flyTo({
      center: [
        this.lat,
        this.lng]
      });
  }
}
