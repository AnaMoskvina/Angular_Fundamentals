import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AuthState } from "./auth.reducer";
import { requestLogin, requestLoginSuccess, requestRegister, requestLogout, requestLogoutSuccess, UserToLogin, UserToRegister } from './auth.actions';
import { isAuthorized, getToken, getSpecificErrorMessage } from './auth.selectors';
import { SessionStorageService } from "../services/session-storage.service";


@Injectable()
export class AuthStateFacade {
    isAuthorized$ = this.store.pipe(select(isAuthorized));
    getToken$ = this.store.pipe(select(getToken));
    getLoginErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage)); // ?
    getLoginRegisterMessage$ = this.store.pipe(select(getSpecificErrorMessage)); // ?

    constructor(
        private store: Store<AuthState>,
        private sessionStorageService: SessionStorageService
        ) {}

    login(body: UserToLogin) {
        this.store.dispatch(requestLogin({ body }));
    }

    register(body: UserToRegister) {
        this.store.dispatch(requestRegister({ body }))
    }

    logout() {
        this.store.dispatch(requestLogout());
    }

    closeSession() {
        this.store.dispatch(requestLogoutSuccess());
    }

    setAuthorization() {
        this.store.dispatch(requestLoginSuccess({ token: this.sessionStorageService.getToken()}));
    }
}