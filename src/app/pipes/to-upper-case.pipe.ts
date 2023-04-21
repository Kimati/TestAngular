import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase'
})
export class ToUpperCasePipe implements PipeTransform {
  valueToTransform:string = 'kisee';

  transform(value: string): string {
    this.valueToTransform = value;

    return value.length === 0 ? '' :
    value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.slice(1).toLowerCase() ));
  }

}
