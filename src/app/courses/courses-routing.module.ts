import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseNewComponent } from './course-new/course-new.component';
import { CoursesComponent } from './courses.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HomeRoutes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'edit/:id', component: CourseEditComponent},
  { path: 'new', component: CourseNewComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule {}