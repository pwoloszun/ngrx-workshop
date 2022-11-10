import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TubeBrowseVideosModule } from '@domain/tube-browse-videos';
import { TubePlaylistModule } from '@domain/tube-playlists';

import { MyTubeSectionRoutingModule } from './my-tube-section-routing.module';
import { FeaturedVideosPageComponent } from './pages/featured-videos-page/featured-videos-page.component';
import { WatchVideoPageComponent } from './pages/watch-video-page/watch-video-page.component';

@NgModule({
  declarations: [
    FeaturedVideosPageComponent,
    WatchVideoPageComponent
  ],
  imports: [
    CommonModule,
    // routing
    MyTubeSectionRoutingModule,
    // domains
    TubeBrowseVideosModule,
    TubePlaylistModule,
  ]
})
export class MyTubeSectionModule { }
