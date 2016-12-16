import { ITeachersService } from '../../core/definitions/teachers.service';
import { TeacherModel } from '../../shared/definitions/teacher.model';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  private teacher:TeacherModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('ITeachersService') private teacherSer: ITeachersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.teacher = this.teacherSer.getById(id);
    });
  }

  afterUpdateTeacher(): void {
    this.router.navigate(['/teachers']);
  }

}
