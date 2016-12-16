import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeachersComponent } from './teachers.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherNewComponent} from './teacher-new/teacher-new.component';

const appRoutes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'edit/:id', component: TeacherEditComponent },
  { path: 'new', component: TeacherNewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeachersRoutingModule { }