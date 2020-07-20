
import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './todos/filter/filter.reduce';
import { filterValidates } from './todos/filter/filter.actions';


export interface AppState {
  todos: Todo[],
  filter: filterValidates
}


export const appReducers: ActionReducerMap<AppState> = {

  todos: todoReducer,
  filter: filterReducer,

}
