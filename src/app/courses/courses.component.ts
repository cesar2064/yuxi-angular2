import { CourseModel } from './shared/definitions/course.model';
import { ICoursesService } from './shared/definitions/courses.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private orderKey: string;
  private date: Date = new Date();
  private courses: CourseModel[];

  constructor( @Inject('ICoursesService') private courseSer: ICoursesService) { }

  ngOnInit() {
    this.courses = this.courseSer.getCourses();
  }

  orderEvent(key) {
    this.orderKey = key;
  }
}
