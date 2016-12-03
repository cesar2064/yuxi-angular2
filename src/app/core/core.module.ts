import { UserService } from './user.service';
import { TitleComponent } from './title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent],
  providers: [
    { provide: 'IUserService', useClass: UserService },
  ]
})
export class CoreModule { }
