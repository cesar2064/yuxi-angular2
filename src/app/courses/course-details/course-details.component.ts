import { ICoursesService } from './../shared/definitions/courses.service';
import { CourseModel } from './../shared/definitions/course.model';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  private course: CourseModel;

  constructor(
    private route: ActivatedRoute,
    @Inject('ICoursesService') private courseSer: ICoursesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id']; 
      this.course = this.courseSer.getById(id);
    });
  }

}