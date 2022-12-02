import { WithLink } from '@infrastructure/app-urls';

import { VideoEntity } from '../../repositories/featured-video-repo.service';

export type VideoWithLink = WithLink<VideoEntity>;
