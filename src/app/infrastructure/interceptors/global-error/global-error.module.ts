import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GlobalErrorInterceptor } from './global-error.interceptor';

const FOR_ROOT_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalErrorInterceptor,
    multi: true
  }
];

@NgModule({
  imports: [
    CommonModule
  ]
  // NO providers!
})
export class GlobalErrorModule {

  static forRoot(): ModuleWithProviders<GlobalErrorModule> {
    return {
      ngModule: GlobalErrorModule,
      providers: FOR_ROOT_PROVIDERS
    };
  }

}
