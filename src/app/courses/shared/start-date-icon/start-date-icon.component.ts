import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-icon',
  template: `<span [style.color]="handleStartDateColor()" class="glyphicon glyphicon-time"></span>`
})
export class StartDateIconComponent {

  @Input() private date: Date;

  constructor() { }

  handleStartDateColor(): string {
    let days: number = Math.round((this.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days > 30) {
      return 'green';
    } else if (days < 30 && days > 0) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

}
