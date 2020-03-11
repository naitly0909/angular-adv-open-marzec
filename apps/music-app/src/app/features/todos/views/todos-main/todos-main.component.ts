import { Component, OnInit } from '@angular/core';
import { Todo } from 'apps/music-app/src/app/core/models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'music-apps-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.scss']
})
export class TodosMainComponent implements OnInit {
  todos = this.service.todos;
  selected = this.service.selected;

  constructor(private service: TodosService) {}

  select(todo: Todo) {
    this.service.selectTodo(todo.id)
  }

  toggleTodo(todo: Todo) {
    this.service.toggleTodo(todo)
  }

  ngOnInit(): void {}
}
