import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-cmp',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() config:{value:string,css:string};
  @Output() sendBtnValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  buttonClick(value){
    this.sendBtnValue.emit(value);
  }

}
