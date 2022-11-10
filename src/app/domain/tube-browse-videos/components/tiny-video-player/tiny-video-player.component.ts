import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, of } from 'rxjs';

import { IPlayerOptions } from '@ui/video-player';

import { actions, types } from '../../state/ui/ui-video-activities';
import { userVideoActivitiesAggregate } from '../../state';

const tinyPlayerOptions: IPlayerOptions = {
  showControls: false,
  showProgress: true,
  playerCssClass: `h-[78px] md:h-[160px]`,
};

@Component({
  selector: 'app-tiny-video-player',
  templateUrl: './tiny-video-player.component.html',
})
export class TinyVideoPlayerComponent implements OnInit, OnDestroy {

  // TODO
  activeVideo$ = of(null);;
  // TODO
  activeVideoTime$ = of(0);
  // TODO
  activeVideoStatus$ = of(types.VideoStatus.Idle);
  // TODO
  canPlay$ = of(false);
  // TODO
  canPause$ = of(false);

  isLoading$ = this.activeVideo$.pipe(
    map((v) => v === null)
  );

  get playerOptions(): IPlayerOptions {
    return tinyPlayerOptions;
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

  playVideoHandler() {
    const timestamp = this.lastTimestamp;
    // TODO: event
  }

  pauseVideoHandler() {
    const timestamp = this.lastTimestamp;
    // TODO: event
  }

}
