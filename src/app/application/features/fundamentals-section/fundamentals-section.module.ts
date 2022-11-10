import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalCounterModule } from '@domain/global-counter';

import { FundamentalsSectionRoutingModule } from './fundamentals-section-routing.module';
import { GlobalCounterPageComponent } from './pages/global-counter-page/global-counter-page.component';
import { LocalCounterPageComponent } from './pages/local-counter-page/local-counter-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    GlobalCounterPageComponent,
    LocalCounterPageComponent,
  ],
  imports: [
    CommonModule,
    FundamentalsSectionRoutingModule,
    // domain
    GlobalCounterModule,
  ]
})
export class FundamentalsSectionModule { }
