import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGlobalCounter from './global-counter.reducer';

const selectGlobalCounterState = createFeatureSelector<fromGlobalCounter.State>(
  fromGlobalCounter.globalCounterFeatureKey
);

export const selectGlobalCounterValue = createSelector(
  selectGlobalCounterState,
  (stateSlice) => stateSlice.value
);

const selectGlobalCounterUpdatedAt = createSelector(
  selectGlobalCounterState,
  (stateSlice) => stateSlice.updatedAt
);

export const selectGlobalCounterFormattedUpdatedAt = createSelector(
  selectGlobalCounterUpdatedAt,
  (updatedAt) => {
    if (updatedAt === null) {
      return '';
    } else {
      return new Date(updatedAt).toISOString();
    }
  }
);

export const selectCalculateFormattedUpdatedAt = createSelector(
  selectGlobalCounterUpdatedAt,
  (updatedAt) => {
    return (format: string) => {
      if (updatedAt === null) {
        return '';
      }
      if (format === 'PL') {
        return new Date(updatedAt).toISOString();
      } else {
        return new Date(updatedAt).toTimeString();
      }
    };
  }
);


// const selectGlobalCounterSlice = (state: any) => state.globalCounter;
// export const selectGlobalCounterValue = (state: any) => {
//   const stateSlice = selectGlobalCounterSlice(state);
//   return stateSlice.value;
// };
