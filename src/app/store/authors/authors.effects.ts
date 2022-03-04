import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthorsService } from "../../services/authors.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { requestAuthorsSuccess, requestAuthorsFail, requestAddAuthorFail } from './authors.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthorsEffects {

    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService,
    ) { }

    getAuthors$ = createEffect(() => this.actions$.pipe(
        ofType('[Author] Request authors'),
        mergeMap(() => this.authorsService.getAll()
            .pipe(
                // @ts-ignore
                map(response => requestAuthorsSuccess(response)),
                catchError(() => of(requestAuthorsFail()))
            ))
    ))

    addAuthor$ = createEffect(() => this.actions$.pipe(
        ofType('[Author] Request add author'),
        mergeMap((name: string) => this.authorsService.addAuthor(name)
            .pipe(
                // @ts-ignore
                map((response) => resetAddedAuthor(response)),
                catchError(() => of(requestAddAuthorFail()))
            ))
    ))


}