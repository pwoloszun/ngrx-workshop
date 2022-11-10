import { StoreModule } from '@ngrx/store';
import { render, screen } from '@testing-library/angular'
import userEvent from '@testing-library/user-event';

import { getStoreModuleForRoot } from 'src/test-utils/create-store';
import { CustomMaterialModule } from '@ui/custom-material';

import { globalCounterFeatureKey, globalCounterReducer } from '../../state/global-counter';
import { GlobalCounterComponent } from './global-counter.component';

describe('GlobalCounterComponent', () => {

  it(`should be able to increment counter value`, async () => {
    await renderComponent();

    await screen.findByText(/Value: 200/i);

    const incrementBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(incrementBtn);

    await screen.findByText(/Value: 205$/i);
  });

});

async function renderComponent() {
  await render(GlobalCounterComponent, {
    imports: [
      getStoreModuleForRoot(),
      StoreModule.forFeature(globalCounterFeatureKey, globalCounterReducer),
      CustomMaterialModule,
    ],
  });
}
