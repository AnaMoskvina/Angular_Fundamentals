import { createAction, props } from '@ngrx/store';

export const requestAuthors = createAction(
  '[Author] Request authors'
);

export const requestAuthorsSuccess = createAction(
    '[Author] Request authors success',
    // props<{ user: {name: string, isAdmin: boolean }}>()
)

export const requestAuthorsFail = createAction(
    '[Author] Request authors fail'
)

export const requestAddAuthor = createAction(
    '[Author] Request add author',
    props<{name: string}>()
  );
  
  export const requestAddAuthorFail = createAction(
    '[Author] Request add author success',
  )
  
  export const resetAddedAuthor = createAction(
    '[Author] Request add author fail'
  )