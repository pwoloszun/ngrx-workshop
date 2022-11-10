import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunicationPageComponent } from './pages/communication-page/communication-page.component';

const routes: Routes = [
  { path: 'communication', component: CommunicationPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMessengerSectionRoutingModule { }
