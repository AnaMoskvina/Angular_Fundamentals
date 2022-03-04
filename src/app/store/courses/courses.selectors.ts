import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';

const getCoursesState = createFeatureSelector<CoursesState>('courses');
export const isAllCoursesLoadingSelector = createSelector(getCoursesState, (state: CoursesState) => state.isAllCoursesLoading);
export const isSearchingStateSelector = createSelector(getCoursesState, (state: CoursesState) => state.isSearchState);
export const isSingleCourseLoadingSelector = createSelector(getCoursesState, (state: CoursesState) => state.isSingleCourseLoading);
export const getCourses = createSelector(getCoursesState, (state: CoursesState) => state.courses);
export const getAllCourses = createSelector(getCoursesState, (state: CoursesState) => state.allCourses);
export const getCourse = createSelector(getCoursesState, (state: CoursesState) => state.courses); // ?? we dont have course field in state
export const getErrorMessage = createSelector(getCoursesState, (state: CoursesState) => state.errorMessage);
