import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { actions } from '../../state/persisted/featured-videos';
import { types } from '../../state/ui/ui-video-activities';
import { browseVideosAggregate } from '../../state';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-featured-videos',
  templateUrl: './user-featured-videos.component.html',
})
export class UserFeaturedVideosComponent implements OnInit {

  // TODO
  featuredVideos$ = of([]);

  isLoading$ = of(true);

  constructor(private store: Store) { }

  ngOnInit(): void {
    // TODO: event
  }

  trackByVideoChange(index: number, video: types.VideoWithTime) {
    return video.id;
  }

}
