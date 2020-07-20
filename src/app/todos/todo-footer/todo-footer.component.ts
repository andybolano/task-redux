
import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import * as actions from './../filter/filter.actions';
import { clearComplete } from '../todo.actions';



@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {


  filterActually: actions.filterValidates = 'todos';
  filters: actions.filterValidates[] = [ 'todos', 'completados', 'pendientes'];
  pendings: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filterActually = state.filter;
      this.pendings = state.todos.filter( todo => !todo.completed).length;
    });
  }

  changeFilter(filter: actions.filterValidates) {
      this.store.dispatch( actions.setFilter( {filter} ) );
  }

  clearComplete(){
    this.store.dispatch( clearComplete() );
  }

}
