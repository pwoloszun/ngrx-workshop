import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as actions from './user-playlist.actions';
import { UserPlaylistRepoService } from '../../repositories/user-playlist-repo.service';
import { NEVER, Observable } from 'rxjs';

@Injectable()
export class UserPlaylistEffects {

  // TODO
  FetchUserPlaylists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.UserPlaylistFetchRequest),
      switchMap((action) => {
        const { } = action;
        return NEVER as Observable<any>;
      })
    );
  });

  constructor(
    private actions$: Actions,
    private userPlaylistRepo: UserPlaylistRepoService
  ) { }
}
