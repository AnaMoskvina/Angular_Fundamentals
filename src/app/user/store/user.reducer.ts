import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
    name: string
    isAdmin: boolean
}

const initialState: UserState = {
    name: 'user',
    isAdmin: false
}

export const userReducer = (state: UserState, action: Action) => createReducer(
    initialState,
    on(UserActions.requestCurrentUser, state => ({ ...state})), // TODO, boilerplate
    on(UserActions.requestCurrentUserSuccess, state => ({ ...state})), // TODO, boilerplate
    on(UserActions.requestCurrentUserFail, state => ({ ...state})),// TODO, boilerplate
  );