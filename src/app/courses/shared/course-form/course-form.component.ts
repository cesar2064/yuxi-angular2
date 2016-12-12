import { CourseModel } from './../definitions/course.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course:CourseModel;

  constructor() { }

  ngOnInit() {
    
  }

}
