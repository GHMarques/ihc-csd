import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-create-risk-area',
  templateUrl: './create-risk-area.component.html',
  styleUrls: ['./create-risk-area.component.scss']
})
export class CreateRiskAreaComponent implements OnInit {
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
      center: [-43.999111399648655, -19.939165045090476], // starting position
      zoom: 17 // starting zoom
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
  }

  updateArea(e) {
    /*var data = this.draw.getAll();
    var answer = document.getElementById('calculated-area');
    if (data.features.length > 0) {
    var area = turf.area(data);
    // restrict to area to 2 decimal points
    var rounded_area = Math.round(area*100)/100;
    answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
    } else {
    answer.innerHTML = '';
    if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
    }*/
  }

  forwardGeocoder(query) {
    var matchingFeatures = [];
    /*for (var i = 0; i < customData.features.length; i++) {
      var feature = customData.features[i];
      // handle queries with different capitalization than the source data by calling toLowerCase()
      if (feature.properties.title.toLowerCase().search(query.toLowerCase()) !== -1) {
      // add a tree emoji as a prefix for custom data results
      // using carmen geojson format: https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
      feature['place_name'] = '🌲 ' + feature.properties.title;
      feature['center'] = feature.geometry.coordinates;
      feature['place_type'] = ['park'];
      matchingFeatures.push(feature);
      }
    }*/
    return matchingFeatures;
  }
     

}
