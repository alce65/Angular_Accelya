import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, limit: number = 10): any {
    return (value.length > limit) ? value.substr(0, limit) + '...' : value;
  }

}



  
