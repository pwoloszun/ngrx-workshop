import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMailModule } from '@domain/my-mail/my-mail.module';

import { DesignPrinciplesSectionRoutingModule } from './design-principles-section-routing.module';
import { MyMailPageComponent } from './pages/my-mail-page/my-mail-page.component';

@NgModule({
  declarations: [
    MyMailPageComponent
  ],
  imports: [
    CommonModule,
    DesignPrinciplesSectionRoutingModule,
    // domain
    MyMailModule,
  ]
})
export class DesignPrinciplesSectionModule { }
