import { Pipe, PipeTransform } from '@angular/core';

import { toTimeStr } from '@utils/datetime-formatter';

@Pipe({
  name: 'timeToStr'
})
export class TimeToStrPipe implements PipeTransform {

  transform(time: number | undefined): string {
    if (time === null || time === undefined) {
      return '';
    } else {
      return toTimeStr(time);
    }
  }

}

