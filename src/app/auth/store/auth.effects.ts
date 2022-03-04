import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from "../services/auth.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { requestLogin, requestLoginSuccess, requestLoginFail } from './auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }

        // !TODO 
    //     login$ = createEffect(() => this.actions$.pipe(
    //     ofType('[Auth] Request login'),
    //     mergeMap(() => this.authService.login() // !TODO does not return ObservableInput
    //         .pipe(
    //         // @ts-ignore
    //         map(response => requestLoginSuccess( { response.token })),
    //         catchError((err) => of(requestLoginFail(err.errorMessage)))
    //    ))
    // ))

}