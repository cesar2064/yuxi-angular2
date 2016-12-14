import { TeacherModel } from './../../../core/definitions/teacher.model';
import { ITeachersService } from './../../../core/definitions/teachers.service';
import { CourseModel } from './../definitions/course.model';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course: CourseModel;
  private teachers: TeacherModel[];

  constructor(
    @Inject('ITeachersService') private teacherSer: ITeachersService
  ) { }

  ngOnInit() {
    this.teachers = this.teacherSer.getTeachers();
  }

}
