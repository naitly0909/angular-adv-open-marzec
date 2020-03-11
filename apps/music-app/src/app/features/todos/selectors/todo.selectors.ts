import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<{
  todo: fromTodo.State;
}>(fromTodo.todoFeatureKey);

export const selectTodosList = createSelector(
  selectTodoState,
  state => state.todo.ids.map(id => state.todo.entities[id])
);

export const selectSelectedTodo = createSelector(
  selectTodoState,
  state =>
    state.todo.selected ? state.todo.entities[state.todo.selected] : null
);
