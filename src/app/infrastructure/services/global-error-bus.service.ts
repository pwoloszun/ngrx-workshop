import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorBusService {

  private _errorsSub$ = new Subject<Error | null>();

  readonly errors$ = this._errorsSub$.asObservable();

  constructor() { }

  dispatchError(err: Error) {
    this._errorsSub$.next(err);
  }

  clearError() {
    this._errorsSub$.next(null);
  }
}
