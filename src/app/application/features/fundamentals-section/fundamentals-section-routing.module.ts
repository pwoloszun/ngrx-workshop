import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { GlobalCounterPageComponent } from './pages/global-counter-page/global-counter-page.component';
import { LocalCounterPageComponent } from './pages/local-counter-page/local-counter-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'global-counter', component: GlobalCounterPageComponent },
  { path: 'local-counter', component: LocalCounterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundamentalsSectionRoutingModule { }
