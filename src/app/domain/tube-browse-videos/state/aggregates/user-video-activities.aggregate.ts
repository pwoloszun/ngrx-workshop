import { createSelector } from '@ngrx/store';
import { find } from 'lodash';

import {
  selectors as uiVideoActivitiesSelectors,
  types as uiVideoActivitiesTypes,
} from '../ui/ui-video-activities';
import * as browseVideosAggregate from './browse-videos.aggregate';

export const selectIsAnyVideoActive = createSelector(
  uiVideoActivitiesSelectors.selectActiveVideoId,
  (activeVideoId) => activeVideoId !== null
);

// TODO
export const selectActiveVideo = createSelector(
  () => {
    return null;
  }
);

// TODO
export const selectActiveVideoTime = createSelector(
  () => {
    return 0;
  }
);

// TODO
export const selectActiveVideoStatus = createSelector(
  () => {
    return uiVideoActivitiesTypes.VideoStatus.Idle;
  }
);

export const selectCanPlayActiveVideo = createSelector(
  selectActiveVideoStatus,
  (activeVideoStatus) => activeVideoStatus !== uiVideoActivitiesTypes.VideoStatus.Playing
);

export const selectCanPauseActiveVideo = createSelector(
  selectActiveVideoStatus,
  (activeVideoStatus) => activeVideoStatus === uiVideoActivitiesTypes.VideoStatus.Playing
);
