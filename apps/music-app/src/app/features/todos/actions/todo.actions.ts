import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../core/models/Todo';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ payload: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle Todo',
  props<{ id: Todo['id']; completed: boolean }>()
);

export const selectTodo = createAction(
  '[Todo] Select Todo',
  props<{ id: Todo['id'] }>()
);
