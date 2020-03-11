import { Injectable } from '@angular/core';
import { Todo } from '../../../core/models/Todo';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  toggleTodo,
  selectTodo,
  loadTodos,
  loadTodosSuccess
} from '../actions/todo.actions';
import {
  selectTodosList,
  selectSelectedTodo
} from '../selectors/todo.selectors';
import { State } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = this.store.select(selectTodosList);
  selected = this.store.select(selectSelectedTodo);

  toggleTodo(todo: Todo) {
    this.store.dispatch(
      toggleTodo({ id: todo.id, completed: !todo.completed })
    );
  }

  selectTodo(id: Todo['id']) {
    this.store.dispatch(selectTodo({ id }));
  }

  constructor(public store: Store<State>) {
    this.store.dispatch(
      loadTodosSuccess({
        payload: [
          {
            userId: 1,
            id: 1,
            title: 'delectus aut A',
            completed: false
          },
          {
            userId: 1,
            id: 2,
            title: 'delectus aut B',
            completed: false
          },
          {
            userId: 1,
            id: 3,
            title: 'delectus aut C',
            completed: false
          }
        ]
      })
    );
  }
}
