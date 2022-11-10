import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '@ui/custom-material';

import { MainNavComponent } from './components/main-nav/main-nav.component';

const PUB_DECLARABLES = [
  MainNavComponent,
];

@NgModule({
  declarations: [
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
})
export class DefaultLayoutModule { }
