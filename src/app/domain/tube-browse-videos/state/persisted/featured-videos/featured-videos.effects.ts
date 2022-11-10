import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { actions as uiVideoActivitiesActions } from '@domain/tube-browse-videos/state/ui/ui-video-activities';
import * as actions from './featured-videos.actions';
import * as selectors from './featured-videos.selectors';
import { FeaturedVideoRepoService } from '../../repositories/featured-video-repo.service';

@Injectable()
export class FeaturedVideosEffects {

  private areVideosFetched$ = this.store.select(
    selectors.selectAreVideosFetched
  );

  FetchMissingVideosFlow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        actions.FetchVideosRequest,
        // TODO
      ),
      // TODO modify: fetch ONLY if not already fetch
      switchMap(() => {
        return this.featuredVideosRepo.findAll().pipe(
          map((videos) => {
            return actions.FetchVideosSuccess({ videos });
          }),
        )
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private featuredVideosRepo: FeaturedVideoRepoService
  ) { }
}
