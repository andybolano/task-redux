
import { createReducer, on } from '@ngrx/store';
import { setFilter, filterValidates } from './filter.actions';

export const initialState: filterValidates  = 'todos'  ;

const _filterReducer = createReducer(initialState,
  on(setFilter, (state, { filter }) => filter),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}

