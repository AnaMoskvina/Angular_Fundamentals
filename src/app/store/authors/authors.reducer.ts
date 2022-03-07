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

const reducer = createReducer(
    initialState,
    on(AuthorsActions.requestAuthors, state => ({ ...state})),
    on(AuthorsActions.requestAuthorsSuccess, (state, { result }) => ({
      ...state,
      authors: result
    })),
    on(AuthorsActions.requestAuthorsFail, state => ({ ...state, authors: []})),
    on(AuthorsActions.requestAddAuthor, state => ({ ...state})),
    on(AuthorsActions.requestAddAuthorSuccess, (state, { result }) => ({
      ...state,
      addedAuthor: { name: result.name, id: result.id }
    })),
    on(AuthorsActions.requestAddAuthorFail, state => ({
      ...state, 
      addedAuthor: {name: '', id: ''}
    })),
    on(AuthorsActions.resetAddedAuthor, (state) => ({
      ...state, 
      addedAuthor: { name: '', id: ''}
    }))
  );

export const authorsReducer = (state: AuthorsState, action: Action) => reducer(state, action);