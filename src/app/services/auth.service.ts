import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, Observer, Subscriber, Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private userToken;
  public loggedIn = new BehaviorSubject <boolean>(false);
  public adminLoggedIn = new BehaviorSubject <boolean>(false);
  public userLoggedIn = new BehaviorSubject <boolean>(false);

  constructor(private http: Http) { this.userToken = null; }

  // adds headers, if appendAuthorization true adds Authorization header
  addAuthHeader(appendAuthorization: boolean) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (appendAuthorization) {
      if (this.userToken) {
        headers.append('Authorization', this.userToken);
      } else {
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        if (userToken) {
          headers.append('Authorization', userToken.token);
        }
      }
    }
    return new RequestOptions({ headers: headers });
  }

  createUser(userData){
    return this.http.post(`/api/auth/signup`, userData)
      .map((res)=> {
        return res.json();
      });
  }

  loginUser(userData: any){
    this.userToken = userData;
    if(userData.username == 'a@a'){ //admin
      this.userToken.type = 0;
      localStorage.setItem('userToken', JSON.stringify({ token: this.userToken }));
      this.loggedIn.next(true);
      this.adminLoggedIn.next(true);
      this.userLoggedIn.next(false);
      return true;
    } else if(userData.username == 'b@b'){ //user
      this.userToken.type = 1;
      localStorage.setItem('userToken', JSON.stringify({ token: this.userToken }));
      this.loggedIn.next(true);
      this.adminLoggedIn.next(false);
      this.userLoggedIn.next(true);
      return true;
    } else {
      return false;
    }
    
  }

  checkToken(){
    const userToken = JSON.parse(localStorage.getItem('userToken'));
    if(userToken){
      this.loggedIn.next(true);
      if(userToken.token.type == 0){
        this.adminLoggedIn.next(true);
        this.userLoggedIn.next(false);
      } else {
        this.adminLoggedIn.next(false);
        this.userLoggedIn.next(true);
      }
    } else {
      this.logout();
    }
  }
  
  // logout method
  logout(): void {
    // clear token remove user from local storage to log user out
    this.loggedIn.next(false);
    this.adminLoggedIn.next(false);
    this.userLoggedIn.next(false);
    this.userToken = null;
    localStorage.removeItem('userToken');
  }
}