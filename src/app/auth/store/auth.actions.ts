import { createAction, props } from '@ngrx/store';

export type UserToLogin = {
    email: string,
    name: string
}

export type UserToRegister = {
    email: string,
    name: string,
    password: string
}

export const requestLogin = createAction(
    '[Auth] Request login',
    props<{ body: UserToLogin}>()
);

export const requestLoginSuccess = createAction(
    '[Auth] Request login success',
    props<{ token: string }>()
);

export const requestLoginFail = createAction(
    '[Auth] Request login fail',
    props<{ result: string}>()
);

export const requestRegister = createAction(
    '[Auth] Request register',
    props<{ body: UserToRegister}>()
);

export const requestRegisterSuccess = createAction(
    '[Auth] Request register success'
);

export const requestRegisterFail = createAction(
    '[Auth] Request register fail',
    props<{ errors: string[]}>()
);

export const requestLogout = createAction(
    '[Auth] Request logout'
);

export const requestLogoutSuccess = createAction(
    '[Auth] Request logout success'
);