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
  constructor() { }
  riskAreaForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    inclination: new FormControl('', [
      Validators.required
    ]),
    high: new FormControl('', [
      Validators.required
    ]),
    potential: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2htYXJxdWVzIiwiYSI6ImNqdXp0YWJnczFibGYzeXJ2empwem91b28ifQ.1m8Dtl9e1xtBrUgzVYHSmg';
    /* eslint-disable */
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
      center: [-43.999111399648655, -19.938555045090476], // starting position
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
        'id': 'maine',
        'type': 'fill',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [[
                [-43.999200, -19.938327],
                [-43.999200, -19.938700],
                [-43.998803, -19.938700],
                [-43.998819, -19.938327]]]
            }
          }
        },
        'layout': {},
        'paint': {
          'fill-color': '#ff0000',
          'fill-opacity': 0.3
        }
      });
    });
  }

  updateArea(e) {}

  
  forwardGeocoder(query) {
    var matchingFeatures = [];
    return matchingFeatures;
  }
}
