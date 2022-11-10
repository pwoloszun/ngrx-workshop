import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CurrentUserService } from '@infrastructure/auth/current-user.service';

import { actions } from '../../state/persisted/user-playlist';
import { VideoInfo } from '../../state/repositories/user-playlist-repo.service';
import { aggregates } from '../../state';
import { of } from 'rxjs';

@Component({
  selector: 'app-extendable-playlist',
  templateUrl: './extendable-playlist.component.html',
})
export class ExtendablePlaylistComponent implements OnInit {

  // TODO
  isLoading$ = of(true);
  // TODO
  playlistVideos$ = of([]);


  private _activeVideoId: number | null = null;
  @Input()
  set activeVideoId(nextActiveId: number | null) {
    this._activeVideoId = nextActiveId;
  }

  get activeVideoId() {
    return this._activeVideoId;
  }

  panelOpenState = false;

  constructor(
    private store: Store,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit(): void { }

  openPanelHandler() {
    this.panelOpenState = true;
    this.fetchPlaylist();
  }

  closePanelHandler() {
    this.panelOpenState = false;
  }

  trackByVideoChange(index: number, video: VideoInfo) {
    return video.id;
  }

  private fetchPlaylist() {
    const userId = this.currentUserService.getCurrentUser()!.id;

    // TODO event
  }

}
