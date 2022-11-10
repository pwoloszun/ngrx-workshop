import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { TubeBrowseVideosDomainService } from '@domain/tube-browse-videos';

@Component({
  selector: 'app-watch-video-page',
  templateUrl: './watch-video-page.component.html',
})
export class WatchVideoPageComponent implements OnInit {

  videoId$ = this.route.paramMap.pipe(
    map((paramMap) => {
      return paramMap.get('id') || null;
    })
  );

  activeVideoId$ = this.browseVideosDomainService.activeVideoId$;

  constructor(
    private route: ActivatedRoute,
    private browseVideosDomainService: TubeBrowseVideosDomainService
  ) { }

  ngOnInit(): void { }

}
