import { createReducer, on } from '@ngrx/store';
import { throwError } from '@utils/throw-error';
import produce from 'immer';

import * as actions from './ui-video-activities.actions';
import * as types from './ui-video-activities.types';

export const uiVideoActivitiesFeatureKey = 'uiVideoActivities';

export interface State {
  currentVideoId: number | null;
  activeVideoId: number | null;
  videoActivities: types.IVideActivitiesRecord;
}

const initialState: State = {
  currentVideoId: null,
  activeVideoId: null,
  videoActivities: {},
};

export const uiVideoActivitiesReducer = createReducer(
  initialState,

  on(actions.ChooseVideo, (state, action) => {
    const { id } = action.payload;
    const nextState = produce(state, (draft) => {
      draft.currentVideoId = id;
    });
    return nextState;
  }),

  on(actions.ChooseVideo, (state, action) => {
    const { id: nextId } = action.payload;
    const isSameVideoChosen = state.activeVideoId === nextId;
    if (state.activeVideoId === null || isSameVideoChosen) {
      return state;
    }
    const id = state.activeVideoId;
    const nextState = produce(state, (draft) => {
      draft.videoActivities[id].status = types.VideoStatus.Paused;
    });
    return nextState;
  }),

  on(actions.PlayCurrentVideo, (state, action) => {
    const { timestamp } = action.payload;
    const id = state.currentVideoId || throwError(`Can't play if Current Video is null`);
    const nextState = produce(state, (draft) => {
      draft.activeVideoId = id;
      draft.videoActivities[id] = {
        id,
        time: timestamp,
        status: types.VideoStatus.Playing,
      };
    });
    return nextState;
  }),

  on(actions.PlayActiveVideo, (state, action) => {
    const { timestamp } = action.payload;
    const id = state.activeVideoId || throwError(`Can't play if Active Video is null`);
    const nextState = produce(state, (draft) => {
      draft.videoActivities[id] = {
        id,
        time: timestamp,
        status: types.VideoStatus.Playing,
      };
    });
    return nextState;
  }),

  on(
    actions.PauseActiveVideo,
    actions.ExitTinyPlayer,
    (state, action) => {
      const { timestamp } = action.payload;
      const id = state.activeVideoId || throwError(`Can't pause if Active Video is null`);
      const nextState = produce(state, (draft) => {
        draft.videoActivities[id] = {
          id,
          time: timestamp,
          status: types.VideoStatus.Paused,
        };
      });
      return nextState;
    }),

  on(actions.ExitLargePlayer, (state, action) => {
    const { timestamp } = action.payload;
    const id = state.currentVideoId || throwError(`Current Video can't be null`);

    const isActiveVideoId = state.activeVideoId === id;
    if (!isActiveVideoId || !isLaterThanActiveVideoTime(state, timestamp)) {
      return state;
    }
    const nextState = produce(state, (draft) => {
      draft.activeVideoId = id;
      draft.videoActivities[id].time = timestamp;
      draft.currentVideoId = null;
    });
    return nextState;
  }),

  on(actions.StopVideo, (state) => {
    const id = state.activeVideoId;
    if (id === null) {
      throwError(`Can't stop inactive Video`);
    }
    const nextState = produce(state, (draft) => {
      draft.activeVideoId = null;
      draft.videoActivities[id] = {
        id,
        time: 0,
        status: types.VideoStatus.Idle,
      };
    });
    return nextState;
  }),

  on(actions.ExitFeaturedVideos, (state) => {
    const nextState = produce(state, (draft) => {
      draft.activeVideoId = null;
      draft.videoActivities = {};
    });
    return nextState;
  }),

);

// private helper selectors
function isLaterThanActiveVideoTime(state: State, timestamp: number): boolean {
  const activeVideoTimestamp = getActiveVideoTime(state);
  return timestamp > activeVideoTimestamp;
}

function getActiveVideoTime(state: State): number {
  const { activeVideoId, videoActivities } = state;
  if (activeVideoId === null || !videoActivities[activeVideoId]) {
    return 0;
  } else {
    const activity = videoActivities[activeVideoId];
    return activity.time;
  }
}
