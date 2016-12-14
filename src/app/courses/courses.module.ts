import { UtilsService } from '../shared/utils.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdererComponent } from './../shared/orderer/orderer.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { CourseComponent } from './course/course.component';
import { StartDateIconComponent } from './shared/start-date-icon/start-date-icon.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './shared/course-form/course-form.component';

@NgModule({
  imports: [    
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CoursesComponent, OrderByPipe, OrdererComponent, CourseComponent, StartDateIconComponent, CourseDetailsComponent, CourseFormComponent],
  providers: [    
    { provide: 'IUtilsService', useClass: UtilsService }
  ]
})
export class CoursesModule { }
