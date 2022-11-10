import { createAction, props } from '@ngrx/store';

import { UserPlaylistEntity, VideoInfo } from '../../repositories/user-playlist-repo.service';

interface IFetchRequestParams {
  userId: number;
}

export const UserPlaylistFetchRequest = createAction(
  '[User Playlist] Fetch Playlist Request',
  props<IFetchRequestParams>()
);

interface IFetchSuccessParams {
  playlist: UserPlaylistEntity;
  videoInfos: VideoInfo[];
}

export const UserPlaylistFetchSuccess = createAction(
  '[User Playlist] Fetch Playlist Success',
  props<IFetchSuccessParams>()
);
