import { createReducer, on } from '@ngrx/store';
import produce from 'immer';

import { VideoDto } from '@infrastructure/api/video-api.service';

import * as actions from './featured-videos.actions';

export const featuredVideosFeatureKey = 'featuredVideos';

export interface State {
  isLoading: boolean;
  videos: VideoDto[];
}

const initialState: State = {
  isLoading: false,
  videos: [],
};

export const featuredVideosReducer = createReducer(
  initialState,

  on(actions.FetchVideosRequest, (state) => {
    const anyVideosFetched = state.videos.length > 0;
    const nextState = produce(state, (draft) => {
      draft.isLoading = !anyVideosFetched;
    });
    return nextState;
  }),

  on(actions.FetchVideosSuccess, (state, action) => {
    const { videos } = action;
    const nextState = produce(state, (draft) => {
      draft.isLoading = false;
      draft.videos = videos;
    });
    return nextState;
  }),

);
