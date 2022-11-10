import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as actions from './global-counter.actions';

// TODO wip
@Injectable()
export class GlobalCounterEffects {


  loadGlobalCountersSaga$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.GlobalCounterIncrement),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      switchMap((action) => {
        const nextAction = actions.MyAsyncOpSuccess({ data: [] });
        return of(nextAction);
      })
    );
  });


  gggHhhhSaga$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(actions.GlobalCounterIncrement),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) { }
}
