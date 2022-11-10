import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CustomMaterialModule } from '@ui/custom-material';

import { globalCounterFeatureKey, globalCounterReducer, GlobalCounterEffects } from './state/global-counter';
import { GlobalCounterComponent } from './components/global-counter/global-counter.component';
import { EffectsModule } from '@ngrx/effects';

const PUB_DECLARABLES = [
  GlobalCounterComponent,
];

@NgModule({
  declarations: [
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    // register feature state
    StoreModule.forFeature(globalCounterFeatureKey, globalCounterReducer),
    // TODO: ngrx register effects
    EffectsModule.forFeature([GlobalCounterEffects]),
  ],
})
export class GlobalCounterModule { }
