import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGlobalCounter from './global-counter.reducer';

const selectGlobalCounterState = createFeatureSelector<fromGlobalCounter.State>(
  fromGlobalCounter.globalCounterFeatureKey
);

// export const selectGlobalCounterValue = createSelector(
//   [selectGlobalCounterState],
//   (stateSlice) => stateSlice.value
// );

export const selectGlobalCounterValue =
  (state: any) => state['globalCounter'].value;
