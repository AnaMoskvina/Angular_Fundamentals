import { createAction, props } from '@ngrx/store';
import { Course } from './courses.reducer';

export const requestAllCourses = createAction(
  '[Courses] Request courses'
);

export const requestAllCoursesSuccess = createAction(
  '[Courses] Request courses success'
  // props<{ user: {name: string, isAdmin: boolean }}>()
);

export const requestAllCoursesFail = createAction(
  '[Courses] Request courses fail'
);

export const requestSingleCourse = createAction(
  '[Courses] Request single course',
  props<{id: string}>()
);
  
export const requestSingleCourseSuccess = createAction(
  '[Courses] Request single course success',
  props<{id: string}>() // TODO: add type
);
  
export const requestSingleCourseFail = createAction(
  '[Courses] Request single course fail',
);

export const requestDeleteCourse = createAction(
  '[Courses] Request delete course',
  props<{id: string}>() // TODO: add type
);
  
export const requestDeleteCourseFail = createAction(
  '[Courses] Request delete course fail',
);

export const requestEditCourse = createAction(
  '[Courses] Request edit course',
  props<{course: Course}>()
);
  
export const requestEditCourseSuccess = createAction(
  '[Courses] Request edit course success',
  props<{course: Course}>() // TODO: add type
);
  
export const requestEditCourseFail = createAction(
  '[Courses] Request edit course fail',
);

export const requestCreateCourse = createAction(
  '[Courses] Request create course',
  props<{course: Course}>() // TODO: add type
);
  
export const requestCreateCourseSuccess = createAction(
  '[Courses] Request create course success',
  props<{id: string}>() // TODO: add type
);
  
export const requestCreateCourseFail = createAction(
  '[Courses] Request create course fail',
);
