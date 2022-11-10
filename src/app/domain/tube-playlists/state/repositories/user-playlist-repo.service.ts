import { Injectable } from '@angular/core';
import { combineLatest, map, of, switchMap, tap, Observable } from 'rxjs';
import { pick } from 'lodash';

import { UserPlaylistDto, UserPlaylistApiService } from '@infrastructure/api/user-playlist-api.service';
import { VideoApiService } from '@infrastructure/api/video-api.service';
import { jsonToStr } from '@utils/json-to-str';
import { throwError } from '@utils/throw-error';
import { getVideoUrl } from '@infrastructure/app-urls';

export type UserPlaylistEntity = UserPlaylistDto;

export interface VideoInfo {
  id: number;
  title: string;
  posterUrl: string;
  linkUrl: string;
}

const videoInfoProps = ['id', 'title', 'posterUrl', 'linkUrl'];

type IFindParams = {
  userId: number;
};

@Injectable({
  providedIn: 'root'
})
export class UserPlaylistRepoService {

  constructor(
    private userPlaylistApiService: UserPlaylistApiService,
    private videoApiService: VideoApiService
  ) { }

  findBy(searchParams: IFindParams): Observable<[UserPlaylistEntity, VideoInfo[]]> {
    return this.findPlaylist(searchParams).pipe(
      switchMap((playlist) => {
        const { videoIds } = playlist;
        return combineLatest([
          of(playlist),
          this.findVideoInfos(videoIds)
        ]);
      })
    );
  }

  private findPlaylist(searchParams: IFindParams): Observable<UserPlaylistEntity> {
    return this.userPlaylistApiService.search(searchParams).pipe(
      tap((foundPlaylists) => {
        if (foundPlaylists.length !== 1) {
          throwError(`Found ${foundPlaylists.length} Playlists for: ${jsonToStr(searchParams)}`);
        }
      }),
      map(([playlist]) => playlist),
    );
  }

  private findVideoInfos(videoIds: number[]): Observable<VideoInfo[]> {
    return this.videoApiService.search({ id: videoIds }).pipe(
      tap((videos) => {
        if (videos.length !== videoIds.length) {
          const receivedVideoIds = videos.map((v) => v.id);
          throwError(`Expected VideoIds: ${jsonToStr(videoIds)}, received: ${jsonToStr(receivedVideoIds)}`);
        }
      }),
      map((videos) => {
        return videos.map((v) => {
          const linkUrl = getVideoUrl(v.id);
          const videoInfo = {
            ...pick(v, videoInfoProps),
            linkUrl
          } as VideoInfo;
          return videoInfo;
        });
      })
    );
  }
}
