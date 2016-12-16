import { ConstantsService } from './../core/constants.service';
import { CourseModel } from '../shared/definitions/course.model';
import { ICoursesService } from '../core/definitions/courses.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private orderKey: string;
  private date: Date = new Date();
  private courses: CourseModel[];

  constructor( 
    @Inject('ICoursesService') private courseSer: ICoursesService, 
    private CONSTANTS:ConstantsService,   
    private router: Router
  ) { }

  ngOnInit() {    
    this.courses = this.courseSer.getCourses();
  }

  orderEvent(key): void {
    this.orderKey = key;
  }
}
