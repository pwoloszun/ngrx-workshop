import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as GlobalCounterActions from './global-counter.actions';

// TODO wip
@Injectable()
export class GlobalCounterEffects {


  loadGlobalCounters$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GlobalCounterActions.GlobalCounterIncrement),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap((action) => {
        console.log('EFFECT:', action);

        return EMPTY as Observable<{ type: string }>
      })
    );
  });

  constructor(private actions$: Actions) { }
}
