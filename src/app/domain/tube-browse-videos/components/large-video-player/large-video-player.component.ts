import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, of } from 'rxjs';

import { actions, types } from '../../state/ui/ui-video-activities';
import { currentVideoAggregate } from '../../state';

@Component({
  selector: 'app-large-video-player',
  templateUrl: './large-video-player.component.html',
})
export class LargeVideoPlayerComponent implements OnInit, OnDestroy {

  // TODO
  videoTime$ = of(0);
  // TODO
  videoStatus$ = of(types.VideoStatus.Idle);
  // TODO
  currentVideo$ = of(null);

  isLoading$ = this.currentVideo$.pipe(
    map((v) => v === null)
  );

  @Input()
  set videoId(idStr: number | string | null) {
    if (idStr !== null) {
      const id = parseInt(idStr as string);
      const action = actions.ChooseVideo({ payload: { id } })
      this.store.dispatch(action);
    }
  }

  private lastTimestamp = 0;

  constructor(private store: Store) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    const timestamp = this.lastTimestamp;
    // TODO: event
  }

  playingVideoHandler(timestamp: number) {
    this.lastTimestamp = timestamp;
  }

  playVideoHandler(timestamp: number) {
    // TODO: event
  }

  pauseVideoHandler(timestamp: number) {
    // TODO: event
  }

  stopVideoHandler() {
    // TODO: event
  }

}
