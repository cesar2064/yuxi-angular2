import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  display:string = "0";
  constructor() { }

  ngOnInit() {
  }
  
  updateDisplay(value):void{    
    this.display+=value;
  }
}
