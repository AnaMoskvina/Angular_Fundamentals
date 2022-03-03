import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { UserState } from "./user.reducer";
import { requestCurrentUser } from './user.actions';
import { getName, isAdmin } from './user.selectors';

@Injectable()
export class UserStateFacade {
    name$ = this.store.pipe(select(getName));
    isAdmin$ = this.store.pipe(select(isAdmin));

    constructor(private store: Store<UserState>) {}

    getUser() {
        this.store.dispatch(requestCurrentUser());
    }
}