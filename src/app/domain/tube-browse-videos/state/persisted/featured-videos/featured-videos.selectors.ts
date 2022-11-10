import { getVideoUrl } from '@infrastructure/app-urls';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeaturedVideos from './featured-videos.reducer';

const selectFeatureState = createFeatureSelector<fromFeaturedVideos.State>(
  fromFeaturedVideos.featuredVideosFeatureKey
);

export const selectIsLoading = createSelector(
  [selectFeatureState],
  (state) => state.isLoading
);

export const selectVideos = createSelector(
  [selectFeatureState],
  (state) => state.videos
);

export const selectVideosWithLink = createSelector(
  [selectVideos],
  (videos) => {
    return videos.map((videoDto) => {
      const linkUrl = getVideoUrl(videoDto.id);
      return {
        ...videoDto,
        linkUrl,
      }
    });
  }
);

export const selectAreVideosFetched = createSelector(
  [selectVideos],
  (videos) => videos.length > 0
);
