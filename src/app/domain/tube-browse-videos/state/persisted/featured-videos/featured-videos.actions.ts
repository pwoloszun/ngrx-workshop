import { createAction, props } from '@ngrx/store';

import { VideoEntity } from '../../repositories/featured-video-repo.service';

export const ActionTODO = createAction(
  '[Featured Videos] TODO',
  props<{ myData: string; }>()
);
