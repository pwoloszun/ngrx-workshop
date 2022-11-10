import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { VideoApiService, VideoDto } from '@infrastructure/api/video-api.service';

export type VideoEntity = VideoDto;

@Injectable({
  providedIn: 'root'
})
export class FeaturedVideoRepoService {

  constructor(
    private videoApi: VideoApiService
  ) { }

  findAll(): Observable<VideoEntity[]> {
    return this.videoApi.getAll();
  }
}
