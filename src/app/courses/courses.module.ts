import { OrdererComponent } from './../shared/orderer/orderer.component';
import { CoursesService } from './shared/courses.service';
import { ICoursesService } from './shared/definitions/courses.service';
import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { CourseComponent } from './course/course.component';
import { StartDateIconComponent } from './shared/start-date-icon/start-date-icon.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './shared/course-form/course-form.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesComponent, OrderByPipe, OrdererComponent, CourseComponent, StartDateIconComponent, CourseDetailsComponent, CourseFormComponent],
  providers: [
    { provide: 'ICoursesService', useClass: CoursesService }
  ]
})
export class CoursesModule { }
