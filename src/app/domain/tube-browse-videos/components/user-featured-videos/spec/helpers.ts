import { render, screen, within } from '@testing-library/angular';
import { HttpClientModule } from '@angular/common/http';

import { getEffectsModuleForRoot, getStoreModuleForRoot } from 'src/test-utils/create-store';
import { getVideoUrl } from '@infrastructure/app-urls';
import { VideoDto } from '@infrastructure/api/video-api.service';
import { TubeBrowseVideosModule } from '@domain/tube-browse-videos';

import { UserFeaturedVideosComponent } from '../user-featured-videos.component';

export async function renderComponent() {
  return await render(UserFeaturedVideosComponent, {
    providers: [],
    imports: [
      HttpClientModule,
      // state
      getStoreModuleForRoot(),
      getEffectsModuleForRoot(),
      //
      TubeBrowseVideosModule,
    ],
    declarations: [],
  });
}

export async function findVideoItems() {
  const videosList = await screen.findByRole('list', { hidden: true });
  return await within(videosList).findAllByRole('region', { name: 'Video Item', hidden: true });
}

export async function expectVideoItemToRender(videoItem: HTMLElement, expVideoJson: VideoDto) {
  const poster = await within(videoItem).findByRole('img', { hidden: true });
  expect(poster).toHaveAttribute('src', expVideoJson.posterUrl);

  const title = await within(videoItem).findByRole('heading', { name: /Title/i, hidden: true });
  expect(title).toHaveTextContent(expVideoJson.title);

  const description = await within(videoItem).findByRole('region', { name: 'Description', hidden: true });
  expect(description).toHaveTextContent(expVideoJson.description);

  const titleLink = await within(videoItem).findByRole('link', { name: expVideoJson.title, hidden: true, });
  expect(titleLink).toHaveAttribute('href', getVideoUrl(expVideoJson.id));
}
