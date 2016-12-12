import { OrdererComponent } from './../shared/orderer/orderer.component';
import { CoursesService } from './shared/courses.service';
import { ICoursesService } from './shared/definitions/courses.service';
import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesComponent, OrderByPipe, OrdererComponent],
  providers: [
    { provide: 'ICoursesService', useClass: CoursesService }
  ]
})
export class CoursesModule { }
