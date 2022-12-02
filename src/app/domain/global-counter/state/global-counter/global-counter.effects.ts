import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as GlobalCounterActions from './global-counter.actions';
import { Store } from '@ngrx/store';
import * as actions from './global-counter.actions';
import * as selectors from './global-counter.selectors';
import { UserApiService } from '../../../../infrastructure/api/user-api.service';
import { UserPlaylistApiService } from '@infrastructure/api/user-playlist-api.service';

// TODO wip
@Injectable()
export class GlobalCounterEffects {
  private counterValue$ = this.store.select(
    selectors.selectGlobalCounterValue
  );

  loadGlobalCounters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlobalCounterActions.GlobalCounterIncrement),
      tap(() => {
        const action = actions.CartWidgetAddProduct({ productInfo: { id: 123, quantity: 2 } });
        this.store.dispatch(action);
      }),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      withLatestFrom(this.counterValue$),
      switchMap(([action, counterValue]) => {
        console.log('EFFECT:', action);
        return this.userApiService.getAll();
      }),
      map((data) => {
        console.log('from API:', data);
        const action = {
          type: '[MySrc] SomeEvent',
          users: data
        };
        return action;
      })
    );
  });

  constructor(
    private actions$: Actions,
    private readonly store: Store,
    private readonly userApiService: UserPlaylistApiService
  ) { }
}
