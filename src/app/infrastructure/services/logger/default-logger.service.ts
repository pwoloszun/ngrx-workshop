
import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultLoggerService extends LoggerService {

  log(message: string): string {
    console.log('[Default] log:', message);
    return `[Default] ${message}`;
  }

}
