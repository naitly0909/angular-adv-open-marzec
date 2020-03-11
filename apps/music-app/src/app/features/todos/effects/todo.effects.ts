import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  concatMap,
  tap,
  switchMapTo,
  switchMap,
  exhaustMap
} from 'rxjs/operators';
import { EMPTY, of, NEVER } from 'rxjs';

import * as TodoActions from '../actions/todo.actions';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../../core/models/Todo';
import { loadTodosSuccess } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  // logActions$ = createEffect(
  //   () => this.actions$.pipe(tap(action => console.log(action))),
  //   { dispatch: false }
  // );

  //   init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ROOT_EFFECTS_INIT),
  //     map(action => ...)
  //   )
  // );

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      exhaustMap(action => {
        return this.http.get<Todo[]>(
          'http://localhost:9000/todos/?_expand=user'
        );
      }),
      map(resp =>
        loadTodosSuccess({
          payload: resp
        })
      ),
      catchError(error => of(TodoActions.loadTodosFailure({ error })))
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
