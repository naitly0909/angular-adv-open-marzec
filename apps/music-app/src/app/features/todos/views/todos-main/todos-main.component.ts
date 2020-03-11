import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from 'apps/music-app/src/app/core/models/Todo';

@Component({
  selector: 'music-apps-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.scss']
})
export class TodosMainComponent implements OnInit {
  todos = of([
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
    },
  ] as Todo[]);

  selected: Todo | null = null

  constructor() {}

  ngOnInit(): void {}
}
