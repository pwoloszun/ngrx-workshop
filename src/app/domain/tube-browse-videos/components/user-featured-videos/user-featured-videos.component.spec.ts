import { arrAsyncForEach } from 'src/test-utils/async-for-each';
import { stubServerApi } from 'src/test-utils/server-stub';

import { videosJson } from './spec/fixtures';
import { expectVideoItemToRender, findVideoItems, renderComponent } from './spec/helpers';


describe('[better Helpers] UserFeaturedVideosComponent', () => {

  it('should render fetched featured Videos', (async () => {
    jest.useFakeTimers();

    // given
    const expectedVideosJson = videosJson();
    stubServerApi.stub({
      method: 'get',
      path: '/api/videos',
      responseJson: expectedVideosJson,
    });

    // when
    await renderComponent();
    jest.advanceTimersByTime(5_000);

    // then
    const videoItems = await findVideoItems();

    expect(videoItems.length).toEqual(expectedVideosJson.length);
    await arrAsyncForEach(expectedVideosJson, async (expVideoJson, i) => {
      const videoItem = videoItems[i];
      await expectVideoItemToRender(videoItem, expVideoJson);
    });
  }));

});
