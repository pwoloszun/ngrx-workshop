import { getVideoUrl } from '@infrastructure/app-urls';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeaturedVideos from './featured-videos.reducer';

import { VideoEntity } from '../../repositories/featured-video-repo.service';

const selectFeatureState = createFeatureSelector<fromFeaturedVideos.State>(
  fromFeaturedVideos.featuredVideosFeatureKey
);

export const selectTODO = createSelector(
  [selectFeatureState],
  (state) => 123 // TODO
);

export const selectVideos = createSelector(
  [selectFeatureState],
  (state) => [] as VideoEntity[] // TODO
);

export const selectAreVideosFetched = createSelector(
  [selectFeatureState],
  (state) => false // TODO
);

export const selectIsLoading = createSelector(
  [selectFeatureState],
  (state) => true // TODO
);

// const linkUrl = getVideoUrl(videoDto.id);
// const videWithUrl = {
//   ...videoDto,
//   linkUrl,
// };
