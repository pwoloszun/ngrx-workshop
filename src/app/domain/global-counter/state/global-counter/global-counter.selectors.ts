import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGlobalCounter from './global-counter.reducer';

const selectGlobalCounterState = createFeatureSelector<fromGlobalCounter.State>(
  fromGlobalCounter.globalCounterFeatureKey
);
const selectGlobalCounterState_NO_MEM = (state: any) => state['globalCounter'];

// export const selectGlobalCounterValue = createSelector(
//   [selectGlobalCounterState],
//   (stateSlice) => stateSlice.value
// );


// export const selectGlobalCounterValue =
//   (state: any) => selectGlobalCounterState_NO_MEM(state).value;

export const selectGlobalCounterValue = createSelector(
  [selectGlobalCounterState],
  (state) => state.value
);


// const selectGlobalCounterUpdatedAt =
//   (state: any) => selectGlobalCounterState_NO_MEM(state).updatedAt;

export const selectGlobalCounterUpdatedAt = createSelector(
  [selectGlobalCounterState],
  (state) => state.updatedAt
);

// export const selectGlobalCounterFormattedUpdatedAt =
//   (state: any) => {
//     const updatedAt = selectGlobalCounterUpdatedAt(state);
//     if (updatedAt !== null) {
//       return new Date(updatedAt).toISOString();
//     } else {
//       return '';
//     }
//   };

export const selectGlobalCounterFormattedUpdatedAt = createSelector(
  [selectGlobalCounterUpdatedAt],
  (updatedAt) => {
    if (updatedAt !== null) {
      return new Date(updatedAt).toISOString();
    } else {
      return '';
    }
  }
);
