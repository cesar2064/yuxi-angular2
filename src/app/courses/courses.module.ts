import { ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../shared/utils.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdererComponent } from './../shared/orderer/orderer.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';
import { CourseComponent } from './course/course.component';
import { StartDateIconComponent } from './start-date-icon/start-date-icon.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { CourseNewComponent } from './course-new/course-new.component';

@NgModule({
  imports: [    
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    Ng2DatetimePickerModule
  ],
  declarations: [CoursesComponent, OrderByPipe, OrdererComponent, CourseComponent, StartDateIconComponent, CourseEditComponent, CourseFormComponent, CourseNewComponent],
  providers: [    
    { provide: 'IUtilsService', useClass: UtilsService }
  ]
})
export class CoursesModule { }
