import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pomnoz'
})
export class PomnozPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}