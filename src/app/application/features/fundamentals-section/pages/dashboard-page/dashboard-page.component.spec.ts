import { render, screen } from '@testing-library/angular'

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {

  it(`should render title`, async () => {
    await render(DashboardPageComponent);
    const title = await screen.findByText(/ngrx-workshop/i);
    expect(title).toBeInTheDocument();
  });

});
