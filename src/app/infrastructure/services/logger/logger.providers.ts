import { Provider } from '@angular/core';

import { TenantsService, TenantName } from '../tenants.service';

import { LoggerService } from './logger.service';
import { BajlandoLoggerService } from './bajlando-logger.service';
import { DefaultLoggerService } from './default-logger.service';
import { TrimmLoggerService } from './trimm-logger.service';

export const LOGGER_PROVIDERS: Provider[] = [
  {
    provide: LoggerService,
    useFactory: loggerFactory,
    deps: [
      TenantsService,
      DefaultLoggerService,
      BajlandoLoggerService,
      TrimmLoggerService,
    ],
  },
];

function loggerFactory(
  tenantService: TenantsService,
  defaultLogger: DefaultLoggerService,
  bajlandoLogger: BajlandoLoggerService,
  trimmLogger: TrimmLoggerService,
): LoggerService {
  if (tenantService.isSelectedByName(TenantName.Bajlando)) {
    return bajlandoLogger;
  } else if (tenantService.isSelectedByName(TenantName.Trimm)) {
    return trimmLogger;
  } else {
    return defaultLogger;
  }
}
