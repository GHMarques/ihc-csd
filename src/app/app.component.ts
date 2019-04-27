import { Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csd';
  closeNavBar(){
    $('.nav-bar').width( '0px' );
    $('#content').css({'margin-left' : '0px'});
    $('.top-header').css({'display' : 'block'});
  }
}
