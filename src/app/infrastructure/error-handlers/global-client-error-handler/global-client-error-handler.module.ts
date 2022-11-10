import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalClientErrorHandler } from './global-client-error-handler';

const FOR_ROOT_PROVIDERS = [
  {
    provide: ErrorHandler,
    useClass: GlobalClientErrorHandler,
  }
];

@NgModule({
  imports: [
    CommonModule
  ]
})
export class GlobalClientErrorHandlerModule {

  static forRoot(): ModuleWithProviders<GlobalClientErrorHandlerModule> {
    return {
      ngModule: GlobalClientErrorHandlerModule,
      providers: FOR_ROOT_PROVIDERS
    };
  }

}
