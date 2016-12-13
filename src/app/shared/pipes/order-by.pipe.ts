import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key?: string): any[] {
    this.orderByKey(array, key);
    return array;
  }

  orderByKey(array: any[], key?: string): void {
    let that = this;
    array.sort((a: any, b: any) => {
      let value1 = that.getValue(a, key);
      let value2 = that.getValue(b, key);
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  getValue(container: any, key?: string): string {
    if (key != undefined) {
      return container[key];
    }
    else{
      return container;
    }
  }

}
