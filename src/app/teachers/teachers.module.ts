import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeacherNewComponent } from './teacher-new/teacher-new.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [TeachersComponent, TeacherNewComponent, TeacherEditComponent, TeacherFormComponent]
})
export class TeachersModule { }
