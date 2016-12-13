import { TeachersRoutingModule } from './teachers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule
  ],
  declarations: [TeachersComponent]
})
export class TeachersModule { }
