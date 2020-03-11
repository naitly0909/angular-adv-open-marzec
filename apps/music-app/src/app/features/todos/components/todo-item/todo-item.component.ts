import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { Todo } from '../../../../core/models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'music-apps-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, AfterViewChecked {
  @Input() todo!: Todo;

  // ngOnChanges(){
  //   this.cdr.detectChanges()
  // }

  ngAfterViewChecked() {
    console.log('TodoItemComponent');
  }

  constructor(private service: TodosService) {}

  toggleCompleted() {
    this.service.toggleTodo(this.todo);
  }

  ngOnInit(): void {}
}
