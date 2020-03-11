import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Todo } from '../../../../core/models/Todo';

@Component({
  selector: 'music-apps-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, AfterViewChecked {

  @Input() todo!:Todo


  ngAfterViewChecked(){
    console.log('TodoItemComponent')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
