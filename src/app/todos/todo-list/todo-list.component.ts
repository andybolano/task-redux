import { filterValidates } from './../filter/filter.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from './../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filterActually: filterValidates;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   this.store.subscribe( ({todos, filter}) => {
        this.todos = todos;
        this.filterActually = filter;
   });
  }

}
