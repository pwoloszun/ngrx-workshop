import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { GlobalErrorBusService } from '@infrastructure/services/global-error-bus.service';

@Injectable()
export class GlobalClientErrorHandler implements ErrorHandler {

  private customErrorHandler: ErrorHandler | null = null;

  constructor(
    private globalErrorBusService: GlobalErrorBusService
  ) { }

  handleError(error: any): void {
    if (this.customErrorHandler !== null) {
      this.customErrorHandler.handleError(error);
    } else { // default error handler
      this.globalErrorBusService.dispatchError(error);
    }
  }

  registerErrorHandler(customErrorHandler: ErrorHandler): void {
    this.customErrorHandler = customErrorHandler;
  }

  unregisterErrorHandler(): void {
    this.customErrorHandler = null;
  }

}
