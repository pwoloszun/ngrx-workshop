import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { LocalCounterPageComponent } from './local-counter-page.component';

describe('LocalCounterPageComponent', () => {

  it(`should increment value on Inc button click`, async () => {
    await render(LocalCounterPageComponent);
    await screen.findByText(/Value: 100/i);

    const incrementBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(incrementBtn);

    await screen.findByText(/Value: 101/i);
  });

});
