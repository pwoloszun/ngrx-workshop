import { createSelector } from '@ngrx/store';
import { find, map } from 'lodash';

import { throwError } from '@utils/throw-error';

import { selectors } from '../persisted/user-playlist';

// TODO: compose
// selectors.selectPlaylistVideoIds,
// selectors.selectVideoInfos
export const selectPlaylistVideos = createSelector(
  () => {
    return []; // TODO
  }
);

const { selectIsLoading } = selectors;

export {
  selectIsLoading,
}
