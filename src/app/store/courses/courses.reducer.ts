import { Action, createReducer, on } from "@ngrx/store";
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface Course {
  id?: string,
  title: string,
  description: string,
  authors: string[],
  duration: string
}

export interface CoursesState {
  allCourses: Course[],
  courses: Course[],
  isAllCoursesLoading: boolean,
  isSingleCourseLoading: boolean,
  isSearchState: boolean,
  errorMessage: string
}

const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
}

export const coursesReducer = (state: CoursesState, action: Action) => {
   return createReducer(
        initialState,
        on(CoursesActions.requestAllCourses, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestAllCoursesSuccess, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestAllCoursesFail, state => ({ ...state})),// TODO, boilerplate
        on(CoursesActions.requestSingleCourse, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestSingleCourseSuccess, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestSingleCourseFail, state => ({ ...state})),// TODO, boilerplate
        on(CoursesActions.requestDeleteCourse, state => ({ ...state})),// TODO, boilerplate
        on(CoursesActions.requestDeleteCourseFail, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestEditCourse, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestEditCourseSuccess, state => ({ ...state})),// TODO, boilerplate
        on(CoursesActions.requestEditCourseFail, state => ({ ...state})),// TODO, boilerplate
        on(CoursesActions.requestCreateCourse, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestCreateCourseSuccess, state => ({ ...state})), // TODO, boilerplate
        on(CoursesActions.requestCreateCourseFail, state => ({ ...state})),// TODO, boilerplate
      );
}

// TODO: wrap in arrow function?