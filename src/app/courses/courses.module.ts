import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { StartDateIconComponent } from './start-date-icon/start-date-icon.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseNewComponent } from './course-new/course-new.component';

@NgModule({
  imports: [    
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2DatetimePickerModule
  ],
  declarations: [CoursesComponent, CourseComponent, StartDateIconComponent, CourseEditComponent, CourseFormComponent, CourseNewComponent]  
})
export class CoursesModule { }
