import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from './button.component'

@Component(Object.assign({
    selector: 'button-primary',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class PrimaryButton extends ButtonComponent {
    constructor(calService: CalculatorService) {
        super("btn-primary", calService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}