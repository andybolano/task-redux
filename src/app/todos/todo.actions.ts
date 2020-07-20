import { createAction, props } from '@ngrx/store';


export const create = createAction(
  '[TODO] Crear Todo',
  props<{text: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const edit = createAction(
  '[TODO] Editar Todo',
  props<{id: number, text: string}>()
);


export const remove = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
);

export const clearComplete = createAction('[Filter] Clear Complete');


export const toggleAll = createAction(
  '[TODO] Toggle Todo todos'
);

