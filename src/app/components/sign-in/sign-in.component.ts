import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50)
    ])
  });

  constructor(
    private authService:AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.loginForm.invalid){
      this.snackBar.open("Não foi possível efetuar o login, favor tentar novamente.", 'Fechar', {duration: 3000});
      return;
    }

    const requestUser = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    const loginResult = this.authService.loginUser(requestUser);
    if(loginResult){
      this.snackBar.open("Login efetuado com sucesso.", 'Fechar', {duration: 3000});
      const userToken = JSON.parse(localStorage.getItem('userToken'));
      if(userToken.token.type == 0){
        this.router.navigateByUrl('/admin-home');
      } else {
        this.router.navigateByUrl('/user-home');
      }
      
    } else {
      this.snackBar.open("Não foi possível efetuar login, favor tentar novamente.", 'Fechar', {duration: 3000});
    }
  }



}