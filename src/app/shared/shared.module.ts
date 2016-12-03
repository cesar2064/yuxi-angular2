import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { AwsomePipe } from './awsome.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AwsomePipe, HighlightDirective],
  exports:[AwsomePipe,HighlightDirective, CommonModule, FormsModule]
})
export class SharedModule { }
