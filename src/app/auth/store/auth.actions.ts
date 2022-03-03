import { createAction, props } from '@ngrx/store';

export const requestLogin = createAction(
    '[Auth] Request login'
);

export const requestLoginSuccess = createAction(
    '[Auth] Request login success',
    props<{ result: {}}>() //TODO: type
);

export const requestLoginFail = createAction(
    '[Auth] Request login fail'
);

export const requestRegister = createAction(
    '[Auth] Request register'
);

export const requestRegisterSuccess = createAction(
    '[Auth] Request register success',
    props<{ result: {}}>() //TODO: type
);

export const requestRegisterFail = createAction(
    '[Auth] Request register fail'
);

export const requestLogout = createAction(
    '[Auth] Request logout'
);

export const requestLogoutSuccess = createAction(
    '[Auth] Request logout success',
    props<{ result: {}}>() //TODO: type
);