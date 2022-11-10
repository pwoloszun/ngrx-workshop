
import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TrimmLoggerService extends LoggerService {

  log(message: string): string {
    console.log('[TRIMM] log:', message);
    return `[### TRIMM ###] ${message}`;
  }

}
