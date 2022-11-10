import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateFeaturedVideosPage } from './guards/can-deactivate-featured-videos-page.guard';
import { FeaturedVideosPageComponent } from './pages/featured-videos-page/featured-videos-page.component';
import { WatchVideoPageComponent } from './pages/watch-video-page/watch-video-page.component';

const routes: Routes = [
  {
    path: 'featured',
    component: FeaturedVideosPageComponent,
    canDeactivate: [CanDeactivateFeaturedVideosPage],
  },
  { path: 'watch/:id', component: WatchVideoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTubeSectionRoutingModule { }
