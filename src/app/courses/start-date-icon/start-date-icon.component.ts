import { IUtilsService } from '../../shared/definitions/utils.service';
import { Component, Input, Inject } from '@angular/core';

@Component({
  selector: 'date-icon',
  template: `<span [style.color]="handleStartDateColor()" class="glyphicon glyphicon-time"></span>`,
  styles: [`
    .glyphicon {
      font-size: 25px;
    }`
  ]
})
export class StartDateIconComponent {

  @Input() private date: Date | string;

  constructor(
    @Inject('IUtilsService') private utilsSer: IUtilsService
  ) { }

  handleStartDateColor(): string {
    let date: Date;

    if (typeof this.date === 'string') {
      date = this.utilsSer.parseDate(this.date, 'DD/MM/YYYY');
    } else {
      date = this.date;
    }

    let days: number = Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days > 30) {
      return 'green';
    } else if (days < 30 && days > 0) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

}
