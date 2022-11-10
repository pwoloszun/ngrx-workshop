import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexibleListComponent } from './flexible-list.component';

const PUB_DECLARABLES = [
  FlexibleListComponent,
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
  ]
})
export class FlexibleListModule { }
