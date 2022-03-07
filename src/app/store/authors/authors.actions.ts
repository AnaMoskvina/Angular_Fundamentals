import { createAction, props } from '@ngrx/store';

type Author = {
  name: string,
  id: string
}

export const requestAuthors = createAction(
  '[Author] Request authors'
);

export const requestAuthorsSuccess = createAction(
  '[Author] Request authors success',
  props<{ result: Author[]}>()
);

export const requestAuthorsFail = createAction(
  '[Author] Request authors fail'
);

export const requestAddAuthor = createAction(
  '[Author] Request add author',
  props<{ name: string}>()
);

export const requestAddAuthorSuccess = createAction(
  '[Author] Request add author success',
  props<{ result: {name: string, id: string}}>()
);
  
export const requestAddAuthorFail = createAction(
  '[Author] Request add author success',
);
  
export const resetAddedAuthor = createAction(
  '[Author] Request add author fail'
);