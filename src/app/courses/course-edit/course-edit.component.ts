import { ICoursesService } from '../../core/definitions/courses.service';
import { CourseModel } from '../../shared/definitions/course.model';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  private course: CourseModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('ICoursesService') private courseSer: ICoursesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.course = this.courseSer.getById(id);
    });
  }

  afterUpdateUser(): void {
    this.router.navigate(['/courses']);
  }

}
