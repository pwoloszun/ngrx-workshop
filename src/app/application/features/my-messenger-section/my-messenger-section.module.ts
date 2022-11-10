import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMessengerSectionRoutingModule } from './my-messenger-section-routing.module';
import { CommunicationPageComponent } from './pages/communication-page/communication-page.component';

@NgModule({
  declarations: [
    CommunicationPageComponent
  ],
  imports: [
    CommonModule,
    // routing
    MyMessengerSectionRoutingModule,
  ]
})
export class MyMessengerSectionModule { }
