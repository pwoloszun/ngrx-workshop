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
  UserPlaylistEffects,
  userPlaylistFeatureKey,
  userPlaylistReducer
} from './state/persisted/user-playlist';
import { ExtendablePlaylistComponent } from './components/extendable-playlist/extendable-playlist.component';
import { CondensedPlaylistComponent } from './components/condensed-playlist/condensed-playlist.component';
import { ExtendablePlaylistItemComponent } from './components/extendable-playlist-item/extendable-playlist-item.component';

const PRIV_DECLARABLES = [
  ExtendablePlaylistItemComponent,
];

const PUB_DECLARABLES = [
  ExtendablePlaylistComponent,
  CondensedPlaylistComponent,
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
    // state
    StoreModule.forFeature(userPlaylistFeatureKey, userPlaylistReducer),
    EffectsModule.forFeature([UserPlaylistEffects]),
    // ui
    CustomMaterialModule,
    CustomPipesModule,
    VideoPlayerModule,
    LoadableListModule,
    LoadableContainerModule,
  ],
})
export class TubePlaylistModule { }
