import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SimpleInfoCardComponent } from './simple-info-card.component';

const PUBLIC_DECLARABLES = [
  SimpleInfoCardComponent,
];

@NgModule({
  declarations: [
    ...PUBLIC_DECLARABLES,
  ],
  exports: [
    ...PUBLIC_DECLARABLES
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
})
export class SimpleInfoCardModule { }
