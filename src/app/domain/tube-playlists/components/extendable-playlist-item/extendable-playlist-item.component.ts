import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface IVideoItem {
  id: number;
  title: string;
  posterUrl: string;
  linkUrl: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-extendable-playlist-item',
  templateUrl: './extendable-playlist-item.component.html'
})
export class ExtendablePlaylistItemComponent implements OnInit {

  @Input()
  video: IVideoItem | null = null;

  @Input()
  isActive = false;

  get itemCss() {
    return { 'bg-slate-200': this.isActive };
  }

  constructor() { }

  ngOnInit(): void { }

}
