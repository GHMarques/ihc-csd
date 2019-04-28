import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CoolLocalStorage } from '@angular-cool/storage';
import { map } from 'rxjs/operators';
import { pipe, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private credentials = null;
  private ctx = {};
  public setNewValue = new BehaviorSubject <boolean>(false);
  public outputAssistant = new BehaviorSubject <Object>(null);
  assistantClient

  constructor(
    private http: Http,
    private localStorage: CoolLocalStorage
  ) {
    this.assistantClient = ""
  }

  setCredentials(credentials) {
    this.credentials = credentials;
    this.localStorage.setObject('credentials', credentials);
    this.setNewValue.next(true);
  }

  setCtx(ctx) {
    this.ctx = ctx;
  }

  callWatson(msg) {
    const req = {
      workspace_id: "",
      input: { text: msg },
      context: this.ctx || null,
    };

    return new Promise((resolve, reject) => {
      // envia a messagem com Assistant
      this.assistantClient.message(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  }
}