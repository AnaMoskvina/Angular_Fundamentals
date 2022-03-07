import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthorsState } from './authors.reducer';

const getAuthorsState = createFeatureSelector<AuthorsState>('authors');
export const getAuthors = createSelector( getAuthorsState, (state: AuthorsState) => state.authors);
export const getAddedAuthor = createSelector( getAuthorsState, (state: AuthorsState) => state.addedAuthor);
