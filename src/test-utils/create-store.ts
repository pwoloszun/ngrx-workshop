import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Actions, EffectsModule } from '@ngrx/effects';
import { Store, StoreModule, Action } from '@ngrx/store';
import { map } from 'lodash';

import { AppActionReducerMap, metaReducers, reducers, State } from 'src/app/reducers';
import { AppEffects } from 'src/app/app.effects';

interface ReducersDict {
  [sliceId: string]: (state: any | undefined, action: Action) => any;
}

interface CreateStoreParams {
  reducers: ReducersDict;
  effects?: any[];
  providers?: any[];
  imports?: any[];
}

const DEFAULT_IMPORTS = [
  NoopAnimationsModule,
];

export function createStore(params: CreateStoreParams) {
  const {
    reducers = {},
    effects = [],
    imports = [],
    providers = []
  } = params;

  TestBed.configureTestingModule({
    imports: [
      getStoreModuleForRoot(),
      getEffectsModuleForRoot(),
      ...DEFAULT_IMPORTS,
      ...imports,
      ...map(reducers, (sliceReducer, featureKey) => {
        return StoreModule.forFeature(featureKey, sliceReducer);
      }),
      EffectsModule.forFeature(effects),
    ],
    providers: [
      Store,
      Actions,
      ...providers,
    ],
  });

  return TestBed.inject<Store<State>>(Store);
}

export function getStoreModuleForRoot(reducersMap: AppActionReducerMap = reducers) {
  return StoreModule.forRoot(reducersMap, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    }
  });
}

export function getEffectsModuleForRoot(effects = [AppEffects]) {
  return EffectsModule.forRoot(effects);
}
