import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../../../core/models/Todo';

export const todoFeatureKey = 'todo';

export interface State {
  ids: Todo['id'][];
  entities: Record<Todo['id'], Todo>;
  message: string;
  loading: boolean;
  selected: Todo['id'] | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  message: '',
  loading: false,
  selected: null
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, (state, action) => ({
    ...state,
    ids: [],
    loading: true,
    message: ''
  })),
  on(TodoActions.loadTodosSuccess, (state, action) => ({
    ...state,
    ids: action.payload.map(t => t.id),
    entities: action.payload.reduce(
      (entries, todo) => {
        entries[todo.id] = todo;
        return entries;
      },
      {} as State['entities']
    ),
    loading: false
  })),
  on(TodoActions.loadTodosFailure, (state, action) => ({
    ...state,
    message: action.error.message,
    loading: false
  })),
  on(TodoActions.selectTodo, (state, action) => ({
    ...state,
    selected: action.id
  })),
  on(TodoActions.toggleTodo, (state, action) => ({
    ...state,
    entities: {
      ...state.entities,
      [action.id]: {
        ...state.entities[action.id],
        completed: action.completed
      }
    }
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
