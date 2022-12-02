import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import * as actions from './global-counter.actions';

export const globalCounterFeatureKey = 'globalCounter';

// slice State shape
export interface State {
  value: number;
  updatedAt: number | null;
}

const initialState: State = {
  value: 500,
  updatedAt: null,
};

export const globalCounterReducer = createReducer(
  initialState,

  on(actions.GlobalCounterIncrement, (state, action) => {
    const { incBy } = action;
    const nextState = produce(state, (draft) => {
      draft.value = state.value + incBy;
    });

    return nextState;
  }),

);
