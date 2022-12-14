import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import * as actions from './global-counter.actions';

export const globalCounterFeatureKey = 'globalCounter';

export interface State {
  value: number;
  updatedAt: number | null;
}

const initialState: State = {
  value: 200,
  updatedAt: null,
};

export const globalCounterReducer = createReducer(
  initialState,

  on(actions.CartWidgetAddProduct, (state, action) => {
    const { } = action; // TODO
    const nextState = produce(state, (draft) => {
      // TODO
    });
    return nextState;
  }),

);
