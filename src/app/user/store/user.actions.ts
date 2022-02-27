import { createAction, props } from '@ngrx/store';

export const requestCurrentUser = createAction(
  '[User] Request current user',
  props<{id: string}>()
);

export const requestCurrentUserSuccess = createAction(
    '[User] Request current user success'
)

export const requestCurrentUserFail = createAction(
    '[User] Request current user fail'
)