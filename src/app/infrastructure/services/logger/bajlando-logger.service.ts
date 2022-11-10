
import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class BajlandoLoggerService extends LoggerService {

  log(message: string): string {
    console.log('[BAJLANDO] log:', message);
    return `[-=BAJLANDO=-] ${message}`;
  }

}
