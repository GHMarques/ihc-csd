import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  font = 20;
  configForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    exibition: new FormControl('', [
      Validators.required
    ]),
    notification: new FormControl('', [
      Validators.required
    ]),
    sms: new FormControl('', [
      Validators.required
    ])
  })
  constructor() { }

  ngOnInit() {
  }

  
}
