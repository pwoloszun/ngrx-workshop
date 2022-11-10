import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTubeStudioSectionRoutingModule } from './my-tube-studio-section-routing.module';
import { StudioDashboardPageComponent } from './pages/studio-dashboard-page/studio-dashboard-page.component';
import { VideoStatsPageComponent } from './pages/video-stats-page/video-stats-page.component';


@NgModule({
  declarations: [
    StudioDashboardPageComponent,
    VideoStatsPageComponent
  ],
  imports: [
    CommonModule,
    MyTubeStudioSectionRoutingModule
  ]
})
export class MyTubeStudioSectionModule { }
