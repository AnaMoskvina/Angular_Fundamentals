import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      tap(() => {}, error => {
        if (error.status === 403) {
          console.log(error.status)
          this.authService.logout();
          this.router.navigate(['/login']); // TODO: this redirect conflicts with non-authorized guard
        }
      })
    )
  }
}
