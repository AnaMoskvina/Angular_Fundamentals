import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from "../services/auth.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { requestLogin, requestLoginSuccess, requestLoginFail, requestLogoutSuccess } from './auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    endpoint: string = 'http://localhost:3000';

    // login$ = createEffect(() => this.actions$.pipe(
    //     ofType('[Auth] Request login'),
    //     mergeMap(() => this.authService.login(),
    //         .pipe(
    //             // @ts-ignore
    //             map(response => requestLoginSuccess(response)),
    //             catchError((error) => of(requestLoginFail(error)))
    //         ))
    // ))

    
    // logout$ = createEffect(() => this.actions$.pipe(
    //     ofType('[Auth] Request logout'),
    //     mergeMap(() => this.authService.logout(),
    //         .pipe(
    //             // @ts-ignore
    //             map(response => requestLogoutSuccess(response))
    //         ))
    // ))

}