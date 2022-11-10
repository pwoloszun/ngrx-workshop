import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexibleListModule } from '@ui/flexible-list';
import { LoadableContainerModule } from '@ui/loadable-container';

import { LoadableListComponent } from './loadable-list.component';

@NgModule({
  declarations: [
    LoadableListComponent
  ],
  exports: [
    LoadableListComponent
  ],
  imports: [
    CommonModule,
    // ui
    FlexibleListModule,
    LoadableContainerModule,
  ]
})
export class LoadableListModule { }
