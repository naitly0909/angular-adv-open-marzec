import { Injectable } from '@angular/core';
import { Todo } from '../../../core/models/Todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = new BehaviorSubject<Todo[]>([
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
  ]);
  selected = new BehaviorSubject<Todo | null>(null);

  updateTodo(todo: Todo) {
    const copy = { ...todo };
    this.selected.next(copy);
    this.todos.next(
      this.todos.getValue().map(t => (t.id == todo.id ? copy : t))
    );
  }

  constructor() {}
}
