import { IUtilsService } from '../../shared/definitions/utils.service';
import { Component, Input, Inject, Attribute, OnChanges } from '@angular/core';

@Component({
  selector: 'date-icon',
  template: `<span [style.color]="color" class="glyphicon glyphicon-time"></span>`,
  styles: [`
    .glyphicon {
      font-size: 25px;
    }`
  ]
})
export class StartDateIconComponent implements OnChanges{

  @Input() private date: Date | string;
  @Input() format:string;
  private color:string;

  constructor(
    @Inject('IUtilsService') private utilsSer: IUtilsService   
  ) { }

  ngOnChanges(changes:any):void{
     let changedDate = changes.date.currentValue;
     this.color = this.handleStartDateColor();
  }

  handleStartDateColor(): string {   
    
    let date: Date;    
    if (typeof this.date === 'string') {
      date = this.utilsSer.parseDate(this.date, this.format);
    } else {
      date = this.date;
    }

    let days: number = Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days > 30) {
      return 'green';
    } else if (days <= 30 && days > 0) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

}
