import { createReducer, on } from '@ngrx/store';
import { create, toggle, edit, remove, toggleAll, clearComplete } from './todo.actions';
import { Todo } from './models/todo.model';

export const initState: Todo[] = [] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje de iroman'),
];


// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(initState,
  on(create, (state, { text }) => {
    return [...state, new Todo(text)];
  }),

  on(remove, (state, { id } ) => state.filter( todo => todo.id !== id)  ),

  on(toggle, (state, { id }) => {

    // return del state
    return state.map( todo => {
      if (todo.id === id) {

        // return del map
        return {
          ...todo,
          completed: !todo.completed
        };

      } else {
      // return del state
        return todo;
      }

    });

  }),

  on(edit, (state, { id, text }) => {

    // return del state
    return state.map( todo => {
      if (todo.id === id) {

        // return del map
        return {
          ...todo,
            text
        };

      } else {
      // return del state
        return todo;
      }

    });

  }),

  on(toggleAll, (state) => {
      return state.map( todo => {
        return {
          ...todo,
          completed: !todo.completed
        };
      });
  }),

  on( clearComplete, (state) =>  state.filter( todo => !todo.completed))

);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}



