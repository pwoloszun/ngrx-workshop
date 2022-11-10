import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutCommonModule, PageNotFoundComponent } from '@application/layouts';
import { mainAppPaths } from '@infrastructure/app-urls';

const routes: Routes = [
  {
    path: mainAppPaths.fundamentals,
    loadChildren: () => import('../features/fundamentals-section/fundamentals-section.module').then(m => m.FundamentalsSectionModule)
  },
  { path: '', redirectTo: `/${mainAppPaths.fundamentals}/dashboard`, pathMatch: 'full' },
  // { path: '', redirectTo: `/${mainAppPaths.myTube}/featured`, pathMatch: 'full' },

  {
    path: mainAppPaths.designPrinciples,
    loadChildren: () => import('../features/design-principles-section/design-principles-section.module').then(m => m.DesignPrinciplesSectionModule)
  },

  {
    path: mainAppPaths.myTube,
    loadChildren: () => import('../features/my-tube-section/my-tube-section.module').then(m => m.MyTubeSectionModule)
  },

  {
    path: mainAppPaths.myTubeStudio,
    loadChildren: () => import('../features/my-tube-studio-section/my-tube-studio-section.module').then(m => m.MyTubeStudioSectionModule)
  },

  {
    path: mainAppPaths.myMessenger,
    loadChildren: () => import('../features/my-messenger-section/my-messenger-section.module').then(m => m.MyMessengerSectionModule)
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutCommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
