import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-icon',
  template: `<span [style.color]="handleStartDateColor()" class="glyphicon glyphicon-time"></span>`,
  styleUrls: ['./start-date-icon.component.css']
})
export class StartDateIconComponent {

  @Input() private date: Date;
  @Input() private comparedDate: Date;

  constructor() { }

  handleStartDateColor(): string {
    let days = Math.round((this.comparedDate.getTime() - this.date.getTime()) / (1000 * 60 * 60 * 24))
    if (days > 30) {
      return 'green';
    } else if (days < 30 && days > 0) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

}
