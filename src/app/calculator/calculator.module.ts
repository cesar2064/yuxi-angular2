import { CalculatorService } from './shared/calculator.service';
import { WarningButton } from './shared/button/button-warning.component';
import { PrimaryButton } from './shared/button/button-primary.component';
import { SuccessButton } from './shared/button/button-success.component';
import { DangerButton } from './shared/button/button-danger.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[CalculatorService],
  declarations: [CalculatorComponent,DangerButton,SuccessButton,PrimaryButton,WarningButton],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
