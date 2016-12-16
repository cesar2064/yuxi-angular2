import { SharedModule } from './../shared/shared.module';
import { ConstantsService } from './constants.service';
import { CoursesService } from './courses.service';
import { TeachersService } from './teachers.service';
import { PagesService } from './pages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [NavBarComponent],
  exports:[NavBarComponent],
  providers:[
    { provide:'IPagesService', useClass: PagesService},
    { provide:'ITeachersService', useClass: TeachersService},
    { provide: 'ICoursesService', useClass: CoursesService },
    ConstantsService
  ]
})
export class CoreModule { }
