import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objKeysToArray'
})
export class ObjKeysToArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
