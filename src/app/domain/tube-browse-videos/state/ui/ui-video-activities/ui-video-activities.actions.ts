import { createAction, props } from '@ngrx/store';

interface IVideoParams {
  id: number;
}

interface IVideoTimeParams {
  timestamp: number;
}

export const PlayCurrentVideo = createAction(
  '[Video Player] Play Current Video',
  props<{ payload: IVideoTimeParams }>()
);

export const PlayActiveVideo = createAction(
  '[Video Player] Play Active Video',
  props<{ payload: IVideoTimeParams }>()
);

export const PauseActiveVideo = createAction(
  '[Video Player] Pause Active Video',
  props<{ payload: IVideoTimeParams }>()
);

export const ExitLargePlayer = createAction(
  '[Large Player] Exit Large Player',
  props<{ payload: IVideoTimeParams }>()
);

export const StopVideo = createAction(
  '[Video Player] Stop Video',
);

export const ExitFeaturedVideos = createAction(
  '[Featured Videos] Exit Featured Videos',
);

export const ExitTinyPlayer = createAction(
  '[Minature Video Panel] Exit Tiny Player',
  props<{ payload: IVideoTimeParams }>()
);

export const EndVideo = createAction(
  '[Video Player] End Video',
  props<{ payload: IVideoParams }>()
);

export const ChooseVideo = createAction(
  '[Featured Videos] Choose Video',
  props<{ payload: IVideoParams }>()

);
