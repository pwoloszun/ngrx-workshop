import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-videos-page',
  templateUrl: './featured-videos-page.component.html',
})
export class FeaturedVideosPageComponent implements OnInit {

  isPlaylistExpanded = false;

  get leftColCssClass() {
    if (this.isPlaylistExpanded) {
      return `min-w-[75%] w-3/4`;
    } else {
      return `min-w-[87.5%] w-7/8`;
    }
  }

  get rightColCssClass() {
    if (this.isPlaylistExpanded) {
      return `min-w-[25%] w-1/4`;
    } else {
      return `min-w-[12.5%] w-1/8`;
    }
  }

  ngOnInit(): void { }

  toggleExpandHandler() {
    this.isPlaylistExpanded = !this.isPlaylistExpanded;
  }

}
