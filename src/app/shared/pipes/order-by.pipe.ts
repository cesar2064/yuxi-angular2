import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key?: string): any[] {
    if (key != undefined) {
      this.orderByKey(array, key);
    } else {
      this.orderString(array);
    }
    return array;
  }

  orderByKey(array: any[], key: string): void {
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

  getValue(object: any, key): string {
    return object[key] instanceof Function ? object[key]() : object[key];
  }

  orderString(array: any[]): void {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
