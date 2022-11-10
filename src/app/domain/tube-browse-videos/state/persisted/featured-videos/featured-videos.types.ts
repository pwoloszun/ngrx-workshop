import { VideoDto } from '@infrastructure/api/video-api.service';
import { WithLink } from '@infrastructure/app-urls';

export type VideoWithLink = WithLink<VideoDto>;
