import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProfileComponent],
  exports:[ProfileComponent]
})
export class ProfileModule { }