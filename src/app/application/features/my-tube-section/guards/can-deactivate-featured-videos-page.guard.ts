import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { TubeBrowseVideosDomainService } from '@domain/tube-browse-videos';

import { FeaturedVideosPageComponent } from '../pages/featured-videos-page/featured-videos-page.component';

const tubeModuleUrlPrefix = /\/my-tube/;

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateFeaturedVideosPage implements CanDeactivate<FeaturedVideosPageComponent> {

  constructor(
    private browseVideosDomainService: TubeBrowseVideosDomainService
  ) { }

  canDeactivate(
    component: FeaturedVideosPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    if (this.isLeavingTubeModule(nextState.url)) {
      this.browseVideosDomainService.onFeaturedVideosExit();
    }
    return true;
  }

  private isLeavingTubeModule(nextUrl: string): boolean {
    return !tubeModuleUrlPrefix.test(nextUrl);
  }
}
