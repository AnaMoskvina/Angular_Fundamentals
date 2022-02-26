import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(Window) private window: Window) {}

  setToken(token: string) {
    return this.window.sessionStorage.setItem('token', token);
  }

  getToken(){
    return this.window.sessionStorage.getItem('token');
  }

  deleteToken() {
    return this.window.sessionStorage.removeItem('token');
  }
}
