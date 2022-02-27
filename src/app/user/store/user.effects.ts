import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserSuccess } from "./user.actions";
import { catchError, map } from 'rxjs';

@Injectable()
export class UserEffects {

    constructor(
        private userService$: UserService,
        private requestCurrentUser$: Actions
    ) { }

    getCurrentUser$ = createEffect(() => this.requestCurrentUser$.pipe(
        // ofType('[User] Request current user'),
        // mergeMap(() => this.userService$.getUser()
        // .pipe(
        //   map(response => ({ type: '[User] Request current user Success', payload:  response.result})),
        //   catchError(() => ({ type: '[User] Request current user Fail' }))
        // ))
      )

}