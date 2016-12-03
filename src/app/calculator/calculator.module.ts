import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CalculatorComponent, ButtonComponent],
  exports:[CalculatorComponent]
})
export class CalculatorModule { }
