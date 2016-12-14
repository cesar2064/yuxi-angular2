import { IUtilsService } from './definitions/utils.service';
import { Injectable } from '@angular/core';

declare var moment: any;

@Injectable()
export class UtilsService implements IUtilsService {

    constructor() { }

    parseDate(date: string, format: string): Date {
        return moment(date, format).toDate();
    }


}