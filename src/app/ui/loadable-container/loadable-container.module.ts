import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';

import { AlertPanelModule } from '@ui/alert-panel';
import { LoadingIndicatorModule } from '@ui/loading-indicator';

import { LoadableContainerComponent } from './loadable-container.component';

@NgModule({
  declarations: [
    LoadableContainerComponent,
  ],
  exports: [
    LoadableContainerComponent,
  ],
  imports: [
    CommonModule,
    LetModule,
    // ui
    AlertPanelModule,
    LoadingIndicatorModule,
  ]
})
export class LoadableContainerModule { }
