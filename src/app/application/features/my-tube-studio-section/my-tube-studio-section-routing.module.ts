import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudioDashboardPageComponent } from './pages/studio-dashboard-page/studio-dashboard-page.component';
import { VideoStatsPageComponent } from './pages/video-stats-page/video-stats-page.component';

const routes: Routes = [
  { path: 'studio-dashboard', component: StudioDashboardPageComponent },
  { path: 'video-stats', component: VideoStatsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTubeStudioSectionRoutingModule { }
