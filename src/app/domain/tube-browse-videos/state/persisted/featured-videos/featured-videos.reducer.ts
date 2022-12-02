import { createReducer, on } from '@ngrx/store';
import produce from 'immer';

import * as actions from './featured-videos.actions';
import { VideoEntity } from '../../repositories/featured-video-repo.service';

export const featuredVideosFeatureKey = 'featuredVideos';

export interface State {
  isLoading: boolean;
  videos: VideoEntity[];
}

const initialState: State = {
  isLoading: false,
  videos: [],
};

export const featuredVideosReducer = createReducer(
  initialState,

  on(actions.ActionTODO, (state, action) => {
    const { myData } = action;
    // TODO
    const nextState = produce(state, (draft) => {
    });
    return nextState;
  }),


);
