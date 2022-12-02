import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { actions as uiVideoActivitiesActions } from '@domain/tube-browse-videos/state/ui/ui-video-activities';
import * as actions from './featured-videos.actions';
import * as selectors from './featured-videos.selectors';
import { FeaturedVideoRepoService } from '../../repositories/featured-video-repo.service';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class FeaturedVideosEffects {

  FetchMissingVideosFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        actions.ActionTODO,
        // TODO
      ),
      // TODO modify: fetch ONLY if not already fetch
      switchMap(() => {
        return EMPTY as Observable<{ type: string }>;
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private featuredVideosRepo: FeaturedVideoRepoService
  ) { }
}
