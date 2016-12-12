import { Component, Input, Output, Attribute, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'orderer',
  templateUrl: 'orderer.component.html'
})
export class OrdererComponent implements OnChanges {
  @Output() orderEvent = new EventEmitter();
  @Input() keyBinder: string;

  private direction: string = 'top';

  constructor( @Attribute('key') private key: String) { }

  ngOnChanges(changes: any) {
    let key = this.key;
    let keyBinderValue = changes.keyBinder.currentValue
    if (key !== undefined && keyBinderValue === key) {
      this.direction = 'bottom';
    } else {
      this.direction = 'top';
    }
  }

  onClick(): void {
    this.orderEvent.emit(this.key);
  }

}
