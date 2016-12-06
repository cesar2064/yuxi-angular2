import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from './button.component'

@Component(Object.assign({
    selector: 'button-danger',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class DangerButton extends ButtonComponent {
    constructor(calService: CalculatorService) {
        super("btn-danger", calService);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
