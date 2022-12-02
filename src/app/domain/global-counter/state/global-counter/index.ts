import * as actions from './global-counter.actions';
import { GlobalCounterEffects } from './global-counter.effects';
import { globalCounterReducer, globalCounterFeatureKey } from './global-counter.reducer';
import * as selectors from './global-counter.selectors';

export {
  actions,
  selectors,
  // register
  globalCounterFeatureKey,
  globalCounterReducer,
  GlobalCounterEffects,
}
