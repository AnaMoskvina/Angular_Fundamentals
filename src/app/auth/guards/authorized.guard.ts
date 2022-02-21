import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

  auth = false; // TODO: remove later

  constructor(private authService: AuthService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return this.authService.isAuthorized$ ? true : false; // TODO ??
      console.log('called');
      return this.auth ? true : false; // TODO ??
  }
}
