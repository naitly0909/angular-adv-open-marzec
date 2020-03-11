import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'apps/music-app/src/app/core/models/Todo';

@Component({
  selector: 'music-apps-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {


  @Input() todo!:Todo

  constructor() { }

  ngOnInit(): void {
  }

}
