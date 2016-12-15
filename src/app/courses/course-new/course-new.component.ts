import { ICoursesService } from '../../shared/definitions/courses.service';
import { CourseModel } from '../../shared/definitions/course.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.css']
})
export class CourseNewComponent implements OnInit {

  private course: CourseModel;

  constructor(
    private router: Router,
    @Inject('ICoursesService') private courseSer: ICoursesService
  ) { }

  ngOnInit() {
    this.course = new CourseModel();
  }

  afterUpdateUser(): void {
    this.courseSer.create(this.course);
    this.router.navigate(['/courses']);
  }

}