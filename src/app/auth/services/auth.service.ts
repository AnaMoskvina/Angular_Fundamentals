import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000/';

  private isAuthorized$$: BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> = this.isAuthorized$$?.asObservable();

  constructor(
    private http: HttpClient, 
    private sessionStorage: SessionStorageService) { }

  login(user: {}) { // TODO: add type
    this.http
      .post(`${this.endpoint}/login`, user)
      .subscribe(res => {
        console.log(res); // TODO: implement
        this.sessionStorage.setToken(''); // TODO: set recieved token
      })
  }

  logout() {
    const token = this.sessionStorage.getToken() || '';
    this.http
    .delete(`${this.endpoint}/logout`, { headers: { Authorization: token}})
    .subscribe(res => {
      console.log(res); // TODO: implement, add header
      this.sessionStorage.deleteToken();
    })
  }

  register (user: {}) { // TODO: add type
    this.http
    .post(`${this.endpoint}/register`, user)
    .subscribe(res => {
      console.log(res); // TODO: implement
      this.sessionStorage.setToken(''); // TODO: set recieved token
    })
  }
}
