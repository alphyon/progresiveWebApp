import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    const trunVal = value.substring(0, limit) + '...';
    return trunVal.length > limit ? trunVal : value;
  }
}
