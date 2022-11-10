import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyMailPageComponent } from './pages/my-mail-page/my-mail-page.component';

const routes: Routes = [
  { path: 'my-mail', component: MyMailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPrinciplesSectionRoutingModule { }
