import { createAction, props } from '@ngrx/store';
import { Course } from './courses.reducer';

export const requestAllCourses = createAction(
  '[Courses] Request courses'
);

export const requestAllCoursesSuccess = createAction(
  '[Courses] Request courses success',
  props<{ result: Course[] }>()
);

export const requestAllCoursesFail = createAction(
  '[Courses] Request courses fail',
  props<{ error: string }>()
);

export const requestFilteredCourses = createAction(
  '[Courses] Request filtered courses',
  props<{ searchValue: string }>()
);

export const requestFilteredCoursesSuccess = createAction(
  '[Courses] Request filtered courses success',
  props<{ courses: Course[] }>()
);

export const requestSingleCourse = createAction(
  '[Courses] Request single course',
  props<{ id: string }>()
);
  
export const requestSingleCourseSuccess = createAction(
  '[Courses] Request single course success',
  props<{ result: Course }>()
);
  
export const requestSingleCourseFail = createAction(
  '[Courses] Request single course fail',
  props<{ error: string }>()
); 

export const requestDeleteCourse = createAction(
  '[Courses] Request delete course',
  props<{ id: string }>()
);
  
export const requestDeleteCourseFail = createAction(
  '[Courses] Request delete course fail',
  props<{ error: string }>()
);

export const requestEditCourse = createAction(
  '[Courses] Request edit course',
  props<{ course: Course }>()
);
  
export const requestEditCourseSuccess = createAction(
  '[Courses] Request edit course success',
  props<{ result: Course }>()
);
  
export const requestEditCourseFail = createAction(
  '[Courses] Request edit course fail',
  props<{ error: string }>()
);

export const requestCreateCourse = createAction(
  '[Courses] Request create course',
  props<{ course: Course }>()
);
  
export const requestCreateCourseSuccess = createAction(
  '[Courses] Request create course success',
  props<{ result: Course }>()
);
  
export const requestCreateCourseFail = createAction(
  '[Courses] Request create course fail',
  props<{ error: string }>()
);
