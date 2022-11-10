import { render, screen } from '@testing-library/angular'

import { MyMailModule } from '@domain/my-mail';

import { MyMailPageComponent } from './my-mail-page.component';

describe('MyMailPageComponent', () => {

  it.skip(`should TODO`, async () => {
    await renderComp();
    const title = await screen.findByText(/my-mail-page/i);
    expect(title).toBeInTheDocument();
  });

});

async function renderComp() {
  await render(MyMailPageComponent, {
    imports: [
      MyMailModule
    ],
  });
}
