import { types } from '../../persisted/featured-videos';

export enum VideoStatus {
  Idle = 'Idle',
  Playing = 'Playing',
  Paused = 'Paused',
}

interface IVideoActivity {
  id: number;
  time: number;
  status: VideoStatus;
}

export type IVideActivitiesRecord = Record<number, IVideoActivity>;

export interface VideoWithTime extends types.VideoWithLink {
  time: number;
}
