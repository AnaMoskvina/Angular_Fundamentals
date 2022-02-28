import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState } from "./user.reducer";
import { requestCurrentUser } from './user.actions';
import { getName, isAdmin } from './user.selectors';

@Injectable()
export class UserStateFacade {
    name$ = this.store.select(getName);
    isAdmin$ = this.store.select(isAdmin);

    constructor(private store: Store<UserState>) {}

    getUser(id: string) {
        this.store.dispatch(requestCurrentUser({id}));
    }
}