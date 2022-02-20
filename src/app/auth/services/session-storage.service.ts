import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(Window) private window: Window) { }

  setToken(token: string) {
    this.window.sessionStorage.setItem('token', token); // TODO: name of the token ?
  }

  getToken(){
    return this.window.sessionStorage.getItem('token');
  }

  deleteToken() {
    this.window.sessionStorage.removeItem('token');
  }
}
