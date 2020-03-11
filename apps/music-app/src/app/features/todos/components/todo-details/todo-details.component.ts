import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Todo } from 'apps/music-app/src/app/core/models/Todo';

@Component({
  selector: 'music-apps-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsComponent implements OnInit {
  @Output() todoChange = new EventEmitter<Todo>();

  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {}

  toggleCompleted() {
    this.todoChange.emit(this.todo);
  }
}
