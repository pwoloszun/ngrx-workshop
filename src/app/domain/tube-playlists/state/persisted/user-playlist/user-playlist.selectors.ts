import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserPlaylist from './user-playlist.reducer';

const selectFeatureState = createFeatureSelector<fromUserPlaylist.State>(
  fromUserPlaylist.userPlaylistFeatureKey
);

export const selectIsLoading = createSelector(
  [selectFeatureState],
  (state) => state.isLoading
);

const selectPlaylist = createSelector(
  [selectFeatureState],
  (state) => state.playlist
);

export const selectVideoInfos = createSelector(
  [selectFeatureState],
  (state) => state.videoInfos
);

export const selectPlaylistVideoIds = createSelector(
  [selectPlaylist],
  (playlist) => {
    if (playlist === null) {
      return [];
    } else {
      return playlist.videoIds;
    }
  }
);
