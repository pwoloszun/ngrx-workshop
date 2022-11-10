import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, interval, map, tap } from 'rxjs';
import { merge } from 'lodash';

import { SubscriptionContainer } from '@utils/subscription-container';
import { toTimeStr } from '@utils/datetime-formatter';

interface IVideoData {
  id: number;
  duration: number;
  posterUrl: string;
  videoUrl: string;
}

export type PlayerStatus = 'Idle' | 'Playing' | 'Paused';

interface IAllPlayerOptions {
  showControls: boolean;
  showProgress: boolean;
  playerCssClass: string;
  notificationFrequency: number;
}

export type IPlayerOptions = Partial<IAllPlayerOptions>;

const defaultOptions: IAllPlayerOptions = {
  showControls: true,
  showProgress: true,
  playerCssClass: '',
  notificationFrequency: 3000, // in ms
};

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent<T extends PlayerStatus> implements OnInit {

  video$ = new BehaviorSubject<IVideoData | null>(null);
  private duration$ = this.video$.pipe(
    filter((v) => v !== null),
    map((v) => v!.duration)
  );

  isLoading$ = this.video$.pipe(
    map((v) => v === null)
  );

  @Input()
  set video(nextVideo: IVideoData | null) {
    this.video$.next(nextVideo);
  }

  private timePassed$ = new BehaviorSubject(0);
  @Input()
  set currentTime(value: number | null) {
    if (value !== null) {
      this.timePassed$.next(value);
    }
  };

  private _playerStatus = 'Idle';
  @Input()
  set playerStatus(value: T | null) {
    if (value !== null) {
      this._playerStatus = value;
    }
  };

  private _options = defaultOptions;
  @Input()
  set options(nextOptions: IPlayerOptions) {
    this._options = merge({}, defaultOptions, nextOptions);
  };

  get options(): IAllPlayerOptions {
    return this._options;
  }

  @Output()
  play = new EventEmitter<number>();

  @Output()
  pause = new EventEmitter<number>();

  @Output()
  stop = new EventEmitter<void>();

  @Output()
  playing = new EventEmitter<number>();

  private subCont = new SubscriptionContainer();

  private readonly intervalFreq = 500;
  private playInBg$ = interval(this.intervalFreq).pipe(
    filter(() => this._playerStatus === 'Playing'),
    tap(() => {
      const nextTimePassedMs = this.timePassed$.value + this.intervalFreq;
      this.timePassed$.next(nextTimePassedMs);
    }),
  );

  timeLeft$ = combineLatest([
    this.timePassed$,
    this.duration$
  ]).pipe(
    map(([secPassed, duration]) => {
      const timeLeft = duration - secPassed
      return toTimeStr(timeLeft);
    })
  );

  private notifications$ = this.timePassed$.pipe(
    filter((ms) => (ms % this.options.notificationFrequency) === 0),
    tap((ms) => this.playing.emit(ms))
  );

  private progressFraction$ = combineLatest([
    this.timePassed$,
    this.duration$
  ]).pipe(
    map(([ms, duration]) => ms / duration)
  );

  progressWidthCss$ = this.progressFraction$.pipe(
    map((value) => ({ width: `${(100 * value).toFixed(2)}%` }))
  );

  currProgressPositionCss$ = this.progressFraction$.pipe(
    map((value) => ({ left: `${(100 * value).toFixed(2)}%` }))
  );

  get canPlay() {
    return this._playerStatus !== 'Playing';
  }

  get canPause() {
    return this._playerStatus === 'Playing';
  }

  get canStop() {
    return this._playerStatus !== 'Idle';
  }

  get showControls() {
    return this.options.showControls;
  }

  get showProgress() {
    return this.options.showProgress;
  }

  get playerCssClass() {
    return this.options.playerCssClass;
  }

  playHandler() {
    if (!this.canPlay) {
      return;
    }
    this.play.emit(this.timePassed$.value);
  }

  pauseHandler() {
    if (!this.canPause) {
      return;
    }
    this.pause.emit(this.timePassed$.value);
  }

  stopHandler() {
    if (!this.canStop) {
      return;
    }
    this.stop.emit();
  }

  ngOnInit() {
    this.subCont.subscribeToAll([
      this.playInBg$,
      this.notifications$
    ]);
  }

  ngOnDestroy() {
    this.subCont.dispose();
  }

}
