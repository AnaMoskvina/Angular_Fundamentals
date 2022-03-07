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
    requestCreateCourseFail,
    requestFilteredCoursesSuccess
} from './courses.actions';
import { of } from 'rxjs';
import { CoursesStateFacade } from './courses.facade';

@Injectable()
export class CoursesEffects {

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private coursesStateFacade: CoursesStateFacade
    ) { }

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request courses'),
        mergeMap(() => this.coursesService.getAll()
            .pipe(
                // @ts-ignore
                map(response => requestAllCoursesSuccess({ result: response.result })),
                catchError((error) => of(requestAllCoursesFail(error)))
            ))
    ))

    filteredCourses$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request filtered courses'),
        mergeMap((searchValue) => this.coursesStateFacade.allCourses$
            .pipe(  
                map(courses => {
                    const regex = new RegExp(`^${searchValue}`, 'gmi');
                    const filteredCourses = courses.filter((course:any) => regex.test(course.title));
                    return requestFilteredCoursesSuccess({ courses: filteredCourses })
                })
            )
    )))

    getSpecificCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request single course'),
        mergeMap((id: string) => this.coursesService.getCourse(id)
            .pipe(
                // @ts-ignore
                map(response => requestSingleCourseSuccess({ result: response.result })),
                catchError((error) => of(requestSingleCourseFail(error)))
            ))
    ))

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request delete course'),
        mergeMap(() => this.coursesService.getAll()
            .pipe(
                // @ts-ignore
                map(response => requestSingleCourseSuccess({ result: response.result })),
                catchError((error) => of(requestDeleteCourseFail(error)))
            ))
    ))

    editCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request edit course'),
        mergeMap((course) => this.coursesService.editCourse(course)
            .pipe(
                // @ts-ignore
                map(response => requestEditCourseSuccess({ result: response.result })),
                catchError((error) => of(requestEditCourseFail(error)))
            ))
    ))

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType('[Courses] Request create course'),
        mergeMap((course) => this.coursesService.createCourse(course)
            .pipe(
                // @ts-ignore
                map(response => requestCreateCourseSuccess({ result: response.result })),
                catchError((error) => of(requestCreateCourseFail(error)))
            ))
    ))

    // redirectToTheCoursesPages = createEffect(() => this.actions$.pipe(
    //     ofType(requestCreateCourseSuccess)
    // ), { dispatch: false })

}