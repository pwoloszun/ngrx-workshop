import { createSelector } from '@ngrx/store';
import { find } from 'lodash';

import { selectors as featuredVideosSelectors } from '../persisted/featured-videos';
import {
  selectors as uiVideoActivitiesSelectors,
  types as uiVideoActivitiesTypes,
} from '../ui/ui-video-activities';

export const selectCurrentVideo = createSelector(
  uiVideoActivitiesSelectors.selectCurrentVideoId,
  featuredVideosSelectors.selectVideos,
  (currentVideoId, videos) => {
    if (currentVideoId === null) {
      return null;
    }
    return find(videos, (v) => v.id === currentVideoId) || null;
  }
);

// TODO
export const selectCurrentVideoTime = createSelector(
  () => {
    return 3000;
  }
);

// TODO
export const selectCurrentVideoStatus = createSelector(
  () => {
    return uiVideoActivitiesTypes.VideoStatus.Paused;
  }
);
