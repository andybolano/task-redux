import { createAction, props } from '@ngrx/store';

export type filterValidates = 'todos' | 'completados' | 'pendientes';


export const setFilter = createAction(
  '[Filter] Set Filter',
   props<{filter: filterValidates}>()
 );

