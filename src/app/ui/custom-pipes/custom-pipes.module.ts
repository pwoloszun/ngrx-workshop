import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeToStrPipe } from './time-to-str.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';

const PUB_DECLARABLES = [
  TimeToStrPipe,
  TruncateTextPipe,
];


@NgModule({
  declarations: [
    ...PUB_DECLARABLES,
  ],
  exports: [
    ...PUB_DECLARABLES,
  ],
  imports: [
    CommonModule
  ]
})
export class CustomPipesModule { }
