import { createSelector } from '@ngrx/store';
import { map } from 'lodash';

import { selectors as featuredVideosSelectors } from '../persisted/featured-videos';
import { selectors as uiVideoActivitiesSelectors } from '../ui/ui-video-activities';

// TODO: videos with link WITH calculated "passed" video time
export const selectVideosWithTime = createSelector(
  () => {
    return [];
  }
);

export const {
  selectAreVideosFetched,
  selectIsLoading
} = featuredVideosSelectors;
