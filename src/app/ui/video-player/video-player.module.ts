import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadableContainerModule } from '@ui/loadable-container';

import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [
    VideoPlayerComponent,
  ],
  exports: [
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    // ui
    LoadableContainerModule,
  ]
})
export class VideoPlayerModule { }
