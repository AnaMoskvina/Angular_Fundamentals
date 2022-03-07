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

export const reducer = createReducer(
    initialState,
    on(UserActions.requestCurrentUser, state => ({ ...state })), 
    on(UserActions.requestCurrentUserSuccess, (_, { result } ) => ({ name: result.name, isAdmin: result.role === 'admin' })), 
    on(UserActions.requestCurrentUserFail, _ => ({ ...initialState})),
  );

  export const userReducer = (state: UserState, action: Action) => reducer(state, action);
