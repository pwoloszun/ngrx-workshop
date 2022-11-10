import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUiVideoActivities from './ui-video-activities.reducer';
import * as types from './ui-video-activities.types';

const selectFeatureState = createFeatureSelector<fromUiVideoActivities.State>(
  fromUiVideoActivities.uiVideoActivitiesFeatureKey
);

const selectVideoActivities = createSelector(
  [selectFeatureState],
  (state) => state.videoActivities
);

export const selectCurrentVideoId = createSelector(
  [selectFeatureState],
  (state) => state.currentVideoId
);

export const selectActiveVideoId = createSelector(
  [selectFeatureState],
  (state) => state.activeVideoId
);

export const selectCalculateVideoTimeById = createSelector(
  [selectVideoActivities],
  (videoActivities) => {
    return (id: number): number => {
      const activity = videoActivities[id];
      return activity ? activity.time : 0;
    };
  }
);

export const selectActiveVideoTime = createSelector(
  selectActiveVideoId,
  selectCalculateVideoTimeById,
  (activeVideoId, calculateVideoTimeById) => {
    if (activeVideoId === null) {
      return 0;
    } else {
      return calculateVideoTimeById(activeVideoId);
    }
  }
);

export const selectCalculateVideoStatusById = createSelector(
  [selectVideoActivities],
  (videoActivities) => {
    return (id: number): types.VideoStatus => {
      const activity = videoActivities[id];
      return activity ? activity.status : types.VideoStatus.Idle;
    };
  }
);
