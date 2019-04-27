import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBarOpen = false;
  isAuthenticated: boolean;
  isUser: boolean;
  isAdmin : boolean;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    this.authService.loggedIn.subscribe(status => this.isAuthenticated = status);
    this.authService.adminLoggedIn.subscribe(status => this.isAdmin = status);
    this.authService.userLoggedIn.subscribe(status => this.isUser = status);
  }

  ngOnInit() {
    //this.closeNavBar();
  }

  ngAfterViewInit(){
    this.closeNavBar();
  }

  changeNavBar(param){
    this.navBarOpen = param;
    if(param) {
      this.openNavBar();
    } else {
      this.closeNavBar();
    }
  }

  openNavBar(){
    $('.nav-bar').width( '300px' );
    $('#content').css({'margin-left' : '300px'});
    $('.top-header').css({'display' : 'none'});
  }

  closeNavBar(){
    $('.nav-bar').width( '0px' );
    $('#content').css({'margin-left' : '0px'});
    $('.top-header').css({'display' : 'block'});
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }

}
