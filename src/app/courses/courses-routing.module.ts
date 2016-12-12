import { CoursesComponent } from './courses.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HomeRoutes: Routes = [
  { path: '', component: CoursesComponent }
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