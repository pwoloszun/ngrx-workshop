import { createReducer, on } from '@ngrx/store';
import produce from 'immer';

import type { UserPlaylistEntity, VideoInfo } from '../../repositories/user-playlist-repo.service';
import * as actions from './user-playlist.actions';

export const userPlaylistFeatureKey = 'userPlaylist';

export interface State {
  isLoading: boolean;
  playlist: UserPlaylistEntity | null;
  videoInfos: VideoInfo[];
}

export const initialState: State = {
  isLoading: false,
  playlist: null,
  videoInfos: [],
};

export const userPlaylistReducer = createReducer(
  initialState,

  // TODO
  on(actions.UserPlaylistFetchRequest, (state) => {
    const nextState = produce(state, (draft) => {
    });
    return nextState;
  }),

  // TODO
  on(actions.UserPlaylistFetchSuccess, (state, action) => {
    const { } = action;
    const nextState = produce(state, (draft) => {
    });
    return nextState;
  }),

);
