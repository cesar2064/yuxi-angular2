import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
  private theExpression: string = "";
  private validExpression = /^[\d\+\/\*\.\- \(\)]*$/;
  constructor() { }

  public addOperation(operation: string) {
    let isValid = this.validExpression;
    if (isValid) {
      this.theExpression += operation;
      console.log(this.theExpression);
    }
  }

  getResult(): string {
    try {
      return eval(this.theExpression);
    } catch (e) {
      return "Error";
    }
  }

  clearExpression():string {
    return (this.theExpression = "")
  }

}
