import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../services/user.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { requestCurrentUserSuccess, requestCurrentUserFail } from './user.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) { }

        getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType('[User] Request current user'),
        mergeMap(() => this.userService.getUser()
            .pipe(
                // @ts-ignore
                map(response => requestCurrentUserSuccess(response.user)),
                catchError(() => of(requestCurrentUserFail()))
            ))
    ))

}