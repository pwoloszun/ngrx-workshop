import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const PUB_DECALRABLES = [
  PageNotFoundComponent,
];

@NgModule({
  declarations: [
    ...PUB_DECALRABLES,
  ],
  exports: [
    ...PUB_DECALRABLES
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutCommonModule { }
