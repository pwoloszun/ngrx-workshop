import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { actions, selectors } from '../state/ui/ui-video-activities';

@Injectable({
  providedIn: 'root'
})
export class TubeBrowseVideosDomainService {

  readonly activeVideoId$ = this.store.select(selectors.selectActiveVideoId);

  constructor(private store: Store) { }

  onFeaturedVideosExit(): void {
    const action = actions.ExitFeaturedVideos();
    this.store.dispatch(action);
  }
}
