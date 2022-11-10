import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from 'lodash';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(text: string | null = '', length = 30): string {
    return truncate(text || '', { length });
  }

}
