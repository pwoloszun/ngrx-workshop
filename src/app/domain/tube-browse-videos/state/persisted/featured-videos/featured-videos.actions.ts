import { createAction, props } from '@ngrx/store';

import { VideoDto } from '@infrastructure/api/video-api.service';

export const ActionTODO = createAction(
  '[Featured Videos] TODO',
  props<{ myData: string; }>()
);
