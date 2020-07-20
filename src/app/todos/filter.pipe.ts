import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './models/todo.model';
import { filterValidates } from './filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterValidates): Todo[] {


    switch ( filter ) {
        case 'completados':
          return todos.filter(todo => todo.completed);

        case 'pendientes':
          return todos.filter(todo => !todo.completed);

          default:
          return todos;
    }

  }

}
