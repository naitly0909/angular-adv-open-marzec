import { Action, ActionCreator, createAction, props } from '@ngrx/store';

export const counterFeatureKey = 'counter';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case Increment.type:
      return { ...state, value: state.value + (action as any).payload };
    case Decrement.type:
      return { ...state, value: state.value - (action as any).payload };
    default:
      return state;
  }
}

export const Increment = createAction(
  'INC',
  props<{
    payload: number;
  }>()
);

export const Decrement = createAction(
  'DEC',
  props<{
    payload: number;
  }>()
);
