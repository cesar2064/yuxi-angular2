import { TeachersService } from './teachers.service';
import { IsVisiblePipe } from './../shared/pipes/is-visible.pipe';
import { PagesService } from './pages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavBarComponent, IsVisiblePipe],
  exports:[NavBarComponent,IsVisiblePipe],
  providers:[
    { provide:'IPagesService', useClass: PagesService},
    { provide:'ITeachersService', useClass: TeachersService}
  ]
})
export class CoreModule { }
