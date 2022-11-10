import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CustomMaterialModule } from '@ui/custom-material';
import { CustomPipesModule } from '@ui/custom-pipes';
import { LoadableListModule } from '@ui/loadable-list';
import { VideoPlayerModule } from '@ui/video-player';
import { LoadableContainerModule } from '@ui/loadable-container';

import {
  featuredVideosFeatureKey,
  featuredVideosReducer,
  FeaturedVideosEffects
} from './state/persisted/featured-videos/register';
import {
  uiVideoActivitiesFeatureKey,
  uiVideoActivitiesReducer,
} from './state/ui/ui-video-activities/register';
import { UserFeaturedVideosComponent } from './components/user-featured-videos/user-featured-videos.component';
import { LargeVideoPlayerComponent } from './components/large-video-player/large-video-player.component';
import { MinatureVideoPanelComponent } from './components/minature-video-panel/minature-video-panel.component';
import { TinyVideoPlayerComponent } from './components/tiny-video-player/tiny-video-player.component';
import { FeaturedPosterComponent } from './components/featured-poster/featured-poster.component';

const PRIV_DECLARABLES = [
  TinyVideoPlayerComponent,
  FeaturedPosterComponent,
];

const PUB_DECLARABLES = [
  UserFeaturedVideosComponent,
  LargeVideoPlayerComponent,
  MinatureVideoPanelComponent,
];

@NgModule({
  declarations: [
    ...PRIV_DECLARABLES,
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule,
    // routing
    RouterModule,
    // state + effects
    StoreModule.forFeature(featuredVideosFeatureKey, featuredVideosReducer),
    StoreModule.forFeature(uiVideoActivitiesFeatureKey, uiVideoActivitiesReducer),
    EffectsModule.forFeature([
      FeaturedVideosEffects,
    ]),
    // ui
    CustomMaterialModule,
    CustomPipesModule,
    VideoPlayerModule,
    LoadableListModule,
    LoadableContainerModule,
  ],
})
export class TubeBrowseVideosModule { }
