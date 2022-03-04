import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesService } from "../../services/courses.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { 
    requestAllCoursesSuccess, 
    requestAllCoursesFail,
    requestSingleCourseSuccess, 
    requestSingleCourseFail,
    requestDeleteCourseFail,
    requestEditCourseSuccess,
    requestEditCourseFail,
    requestCreateCourseSuccess,
    requestCreateCourseFail
} from './courses.actions';
import { of } from 'rxjs';

@Injectable()
export class CoursesEffects {

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
    ) { }

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request courses'),
        mergeMap(() => this.coursesService.getAll()
            .pipe(
                // @ts-ignore
                map(courses => requestAllCoursesSuccess({ courses })),
                catchError(() => of(requestAllCoursesFail()))
            ))
    ))

    // ? filteredCourses$? --- we dont have method for getting filtered results in service

    getSpecificCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request single course'),
        mergeMap((id: string) => this.coursesService.getCourse(id)
            .pipe(
                // @ts-ignore
                map(course => requestSingleCourseSuccess({ course })),
                catchError(() => of(requestSingleCourseFail()))
            ))
    ))

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request delete course'),
        mergeMap(() => this.coursesService.getAll()
            .pipe(
                // @ts-ignore
                map(course => requestSingleCourseSuccess({ course })), // ?? what to do here?
                catchError(() => of(requestDeleteCourseFail()))
            ))
    ))

    editCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request edit course'),
        mergeMap((course) => this.coursesService.editCourse(course)
            .pipe(
                // @ts-ignore
                map(course => requestEditCourseSuccess({ course })), // ?? what to do here?
                catchError(() => of(requestEditCourseFail()))
            ))
    ))

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request create course'),
        mergeMap((course) => this.coursesService.createCourse(course)
            .pipe(
                // @ts-ignore
                map(course => requestCreateCourseSuccess({ course })), // ?? what to do here?
                catchError(() => of(requestCreateCourseFail()))
            ))
    ))

    // redirectToTheCoursesPages // ??

}