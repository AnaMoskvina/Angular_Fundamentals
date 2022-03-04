import { Action, createReducer, on } from "@ngrx/store";
import * as AuthorsActions from './authors.actions';

export const authorsFeatureKey = 'authors';

interface Author {
    name: string,
    id: string
  }

export interface AuthorsState {
    authors: Author[],
    addedAuthor: Author
}

const initialState: AuthorsState = {
    authors: [],
    addedAuthor: {name: '', id: ''}
}

export const authorsReducer = (state: AuthorsState, action: Action) => {
   return createReducer(
        initialState,
        on(AuthorsActions.requestAuthors, state => ({ ...state})), // TODO, boilerplate
        on(AuthorsActions.requestAuthorsSuccess, state => ({ ...state})), // TODO, boilerplate
        on(AuthorsActions.requestAuthorsFail, state => ({ ...state})),// TODO, boilerplate
        on(AuthorsActions.requestAddAuthor, state => ({ ...state})), // TODO, boilerplate
        on(AuthorsActions.requestAddAuthorFail, state => ({ ...state})), // TODO, boilerplate
        on(AuthorsActions.resetAddedAuthor,state => ({ ...state})),// TODO, boilerplate
      );
}

// TODO: wrap in arrow function?