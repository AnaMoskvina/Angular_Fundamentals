import { ActionReducerMap } from '@ngrx/store';
import { authorsFeatureKey, authorsReducer } from './authors/authors.reducer';
import { AuthorsEffects } from './authors/authors.effects';
import { coursesFeatureKey, coursesReducer } from './courses/courses.reducer';
import { CoursesEffects } from './courses/courses.effects'

interface State {};

export const reducers: ActionReducerMap<State> = {
    [authorsFeatureKey]: authorsReducer,
    [coursesFeatureKey]: coursesReducer
};

export const effects = [CoursesEffects, AuthorsEffects];
// export const effects = [];