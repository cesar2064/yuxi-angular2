import { UtilsService } from './utils.service';
import { IsVisiblePipe } from './pipes/is-visible.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdererComponent } from './orderer/orderer.component';
import {OrderByPipe} from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule    
  ],
  providers: [
    { provide: 'IUtilsService', useClass: UtilsService }
  ],
  declarations:[OrdererComponent, OrderByPipe, IsVisiblePipe],
  exports: [OrdererComponent, OrderByPipe, IsVisiblePipe]
})
export class SharedModule { }
