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

const reducer = createReducer(
    initialState,
    on(AuthActions.requestLogin, state => ({ ...state})), 
    on(AuthActions.requestLoginSuccess, (_,  { token }) => ({ 
        isAuthorized: true, 
        token: token,
        errorMessage: ''
        })),
    on(AuthActions.requestLoginFail, (_,  { result }) => ({
        isAuthorized: false, 
        token: '',
        errorMessage: result
        })),
    on(AuthActions.requestRegister, state => ({ ...state})),
    on(AuthActions.requestRegisterSuccess, (state ) => ({ ...state })),
    on(AuthActions.requestRegisterFail, (state, { errors }) => ({
        ...state,
        errorMessage: errors.join(', ')
        })),
    on(AuthActions.requestLogout, state => ({ ...state})),
    on(AuthActions.requestLogoutSuccess, () => ({ ...initialState })),
  );

  export const authReducer = (state: AuthState, action: Action) => reducer(state, action);