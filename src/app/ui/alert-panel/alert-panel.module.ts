import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertPanelComponent } from './alert-panel.component';

@NgModule({
  declarations: [
    AlertPanelComponent
  ],
  exports: [
    AlertPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlertPanelModule { }
