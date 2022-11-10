import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-condensed-playlist',
  templateUrl: './condensed-playlist.component.html',
})
export class CondensedPlaylistComponent implements OnInit {

  @Input()
  isExpanded = false;

  @Output()
  toggleExpand = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  toggleBtnHandler() {
    this.toggleExpand.emit();
  }

}
