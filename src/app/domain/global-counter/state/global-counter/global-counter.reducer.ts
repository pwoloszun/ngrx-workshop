import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { cloneDeep } from 'lodash';
import * as actions from './global-counter.actions';

export const globalCounterFeatureKey = 'globalCounter';

export interface State {
  value: number;
  updatedAt: number | null;

  // formattedUpd: string;
  // plFormattedUpd: string;
  // engFormattedUpd: string;
}

const initialState: State = {
  value: 300,
  updatedAt: null,
};

export const globalCounterReducer = createReducer(
  initialState,

  on(actions.GlobalCounterIncrement, (state, action) => {
    const { incBy, timestamp } = action; // TODO
    const nextState = produce(state, (draft) => {
      draft.value = state.value + incBy;
      draft.updatedAt = timestamp;
    });
    return nextState;
  }),

);
