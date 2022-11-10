import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { cloneDeep } from 'lodash';
import * as actions from './global-counter.actions';

export const globalCounterFeatureKey = 'globalCounter';

export interface State {
  value: number;
  updatedAt: number | null;
}

const initialState: State = {
  value: 300,
  updatedAt: null,
};

export const globalCounterReducer = createReducer(
  initialState,

  on(actions.CartWidgetAddProduct, (state, action) => {
    const { } = action; // TODO
    const nextState = produce(state, (draft) => {
      // TODO
      // draft.ggg =123;
    });
    return nextState;
  }),

  on(actions.GlobalCounterIncrement, (state, action) => {
    const { incBy } = action; // TODO
    const nextState = produce(state, (draft) => {
      draft.value = state.value + incBy;
    });
    return nextState;
  }),

);
