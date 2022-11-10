import { arrAsyncForEach } from 'src/test-utils/async-for-each';
import { stubServerApi } from 'src/test-utils/server-stub';

import { VideoDto } from '@infrastructure/api/video-api.service';

import { expectVideoItemToRender, findVideoItems } from './helpers';

export function featuredVideosAreAvailableAtEndpoint(expectedVideosJson: VideoDto[]) {
  stubServerApi.stub({
    method: 'get',
    path: '/api/videos',
    responseJson: expectedVideosJson,
  });
}

export async function shouldRenderVideoItemForEach(expectedVideosJson: VideoDto[]) {
  const videoItems = await findVideoItems();
  expect(videoItems.length).toEqual(expectedVideosJson.length);
  await arrAsyncForEach(expectedVideosJson, async (expVideoJson, i) => {
    const videoItem = videoItems[i];
    await expectVideoItemToRender(videoItem, expVideoJson);
  });
}
