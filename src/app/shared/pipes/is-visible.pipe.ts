import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isVisible'
})
export class IsVisiblePipe implements PipeTransform {

  transform(values: any[]): any[] {
    return values.filter(value=> value.visible);
  }

}
