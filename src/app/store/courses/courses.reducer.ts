import { state } from "@angular/animations";
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
  course: Course
  isAllCoursesLoading: boolean,
  isSingleCourseLoading: boolean,
  isSearchState: boolean,
  errorMessage: string
}

const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  course: {
    title: '',
    description: '',
    authors: [],
    duration: '0'
  },
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: ''
}

const reducer = createReducer(
  initialState,
  on(CoursesActions.requestAllCourses, state => ({
    ...state,
    isAllCoursesLoading: true
  })),
  on(CoursesActions.requestAllCoursesSuccess, (state, { result }) => ({
    ...state,
    allCourses: result,
    isAllCoursesLoading: false
  })),
  on(CoursesActions.requestAllCoursesFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
    allCourses: []
  })),
  on(CoursesActions.requestSingleCourse, state => ({
  ...state,
  isSingleCourseLoading: true
  })),
  on(CoursesActions.requestSingleCourseSuccess, (state, { result }) => ({
    ...state,
    isAllCoursesLoading: false,
    course: result
  })),
  on(CoursesActions.requestSingleCourseFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error
  })),
  on(CoursesActions.requestFilteredCourses, state => ({ ...state })),
  on(CoursesActions.requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses
  })),
  on(CoursesActions.requestDeleteCourse, state => ({ ...state })),
  on(CoursesActions.requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),
  on(CoursesActions.requestEditCourse, state => ({ ...state })),
  on(CoursesActions.requestEditCourseSuccess, (state, { result }) => ({
    ...state,
    course: result
  })),
  on(CoursesActions.requestEditCourseFail, (state, { error }) => ({ 
    ...state,
    errorMessage: error
  })),
  on(CoursesActions.requestCreateCourse, (state) => ({ ...state })),
  on(CoursesActions.requestCreateCourseSuccess, (state, { result }) => ({
    ...state,
    course: result
  })),
  on(CoursesActions.requestCreateCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),
);

export const coursesReducer = (state: CoursesState, action: Action) => reducer(state, action);