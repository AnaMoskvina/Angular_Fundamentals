import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
    isAuthorized: boolean
    token: string
    errorMessage: string
}

const initialState: AuthState = {
    isAuthorized: false,
    token: '',
    errorMessage: ''
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.requestLogin, state => ({ ...state})), // TODO, boilerplate
    on(AuthActions.requestLoginSuccess, (state, result ) => ({ ...state, ...result})), // TODO, boilerplate
    on(AuthActions.requestLoginFail, state => ({ ...state})),// TODO, boilerplate
    on(AuthActions.requestRegister, state => ({ ...state})), // TODO, boilerplate
    on(AuthActions.requestRegisterSuccess, (state, result ) => ({ ...state, ...result})), // TODO, boilerplate
    on(AuthActions.requestRegisterFail, state => ({ ...state})),// TODO, boilerplate
    on(AuthActions.requestLogout, state => ({ ...state})), // TODO, boilerplate
    on(AuthActions.requestLogoutSuccess, (state, result ) => ({ ...state, ...result})), // TODO, boilerplate
  );

// TODO: wrap reducer with arrow function??