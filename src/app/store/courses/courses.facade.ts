import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";
import { 
    requestAllCourses, 
    requestSingleCourse,
    requestDeleteCourse,
    requestEditCourse,
    requestCreateCourse,
    requestFilteredCourses
} from './courses.actions';
import { 
    isAllCoursesLoadingSelector, 
    isSearchingStateSelector, 
    isSingleCourseLoadingSelector ,
    getErrorMessage,
    getAllCourses,
    getCourses,
    getCourse
} from './courses.selectors';
import { Course } from './courses.reducer';

@Injectable({
    providedIn: 'root'
  })
export class CoursesStateFacade {
    isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
    isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
    courses$ = this.store.pipe(select(getCourses));
    allCourses$ = this.store.pipe(select(getAllCourses));
    course$ = this.store.pipe(select(getCourse));
    errorMessage$ = this.store.pipe(select(getErrorMessage));

    constructor(private store: Store<CoursesState>) {}

    getAllCourses() {
        this.store.dispatch(requestAllCourses());
    }

    getSingleCourse(id: string) {
        this.store.dispatch(requestSingleCourse({ id }));
    }

    getFilteredCourses(searchValue: string) {
        this.store.dispatch(requestFilteredCourses({ searchValue })); 
    }

    editCourse(course: Course) {
        this.store.dispatch(requestEditCourse({ course }));
    }

    createCourse(course: Course) {
        this.store.dispatch(requestCreateCourse({ course }));
    }

    deleteCourse(id: string) {
        this.store.dispatch(requestDeleteCourse({ id }));
    }
}