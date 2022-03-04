import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
    name: string
    isAdmin: boolean
}

const initialState: UserState = {
    name: 'user',
    isAdmin: false
}

export const userReducer = createReducer(
    initialState,
    on(UserActions.requestCurrentUser, state => ({ ...state})), // TODO, boilerplate
    on(UserActions.requestCurrentUserSuccess, (_, response ) => ({ ...response.user})), // TODO, boilerplate
    on(UserActions.requestCurrentUserFail, state => ({ ...state})),// TODO, boilerplate
  );

// TODO: wrap reducer with arrow function ??