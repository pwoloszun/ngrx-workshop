import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, NEVER } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        // retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) { // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else { // server-side error
            errorMessage = `Error Status: ${error.status} Message: ${error.message}`;
          }
          console.log('\nhttp interceptor GlobalErrorInterceptor START \n', errorMessage, '\n'); // TODO
          // return throwError(new Error(errorMessage));
          // return throwError(error);
          return throwError(new Error('htttttp'));

        })
      );
  }

}
