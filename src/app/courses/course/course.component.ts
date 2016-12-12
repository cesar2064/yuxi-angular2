import { CourseModel } from './../shared/definitions/course.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[course-component]',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
  
  @Input() private course:CourseModel;

  constructor() { }

  ngOnInit() {
  }

}
