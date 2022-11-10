import { Component, Input, OnInit } from '@angular/core';

interface IVideoData {
  id: number;
  posterUrl: string;
  title: string;
  duration: number;
  time: number;
}

@Component({
  selector: 'app-featured-poster',
  templateUrl: './featured-poster.component.html',
})
export class FeaturedPosterComponent implements OnInit {

  @Input()
  video: IVideoData | null = null;

  private get timePct(): number {
    if (!this.video) {
      return 0;
    } else {
      const { duration, time } = this.video;
      return Math.floor((100 * time) / duration);
    }
  }

  get progressCss() {
    return { width: `${this.timePct}%` };
  }

  ngOnInit(): void { }

}
