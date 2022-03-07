import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";
import { requestAuthors, requestAddAuthor } from './authors.actions';
import { getAuthors, getAddedAuthor } from './authors.selectors';

@Injectable()
export class UserStateFacade {
    authors$ = this.store.pipe(select(getAuthors));
    getAddedAuthors$ = this.store.pipe(select(getAddedAuthor));

    constructor(private store: Store<AuthorsState>) {}

    getAuthors() {
        this.store.dispatch(requestAuthors());
    }

    addAuthor(name: string) {
        this.store.dispatch(requestAddAuthor({name}));
    }
}