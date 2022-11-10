import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { concatMap, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Observable, EMPTY, timer, race, NEVER } from 'rxjs';

import * as actions from './my-mail.actions';

const EMPTY_ACTION: Observable<{ type: string; }> = EMPTY;

const timeToExpire = {
  cancel: 3500,
  revert: 3500,
  resume: 3500,
  showInfo: 5000,
};

@Injectable()
export class MyMailEffects {

  // TODO: identify & impl business flows

  // TODO 1: send mail flow
  // TODO 2: cancel flow
  // TODO 3: revert flow

  TemplateTODO$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.MyMailDialogOpen),
      concatMap(() => {
        return NEVER as Observable<{ type: string; }>;
      })
    );
  });

  // TODO
  private cancelStartActions$ = NEVER;

  // TODO
  private resumeSendActions$ = NEVER;

  // TODO
  private revertStartActions$ = NEVER;

  constructor(private actions$: Actions) { }
}
