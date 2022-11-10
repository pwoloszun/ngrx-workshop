import { createAction, props } from '@ngrx/store';

import { VideoDto } from '@infrastructure/api/video-api.service';

export const FetchVideosRequest = createAction(
  '[Featured Videos] Fetch Videos Request'
);

export const FetchVideosSuccess = createAction(
  '[API] Fetch Videos Success',
  props<{ videos: VideoDto[]; }>()
);
