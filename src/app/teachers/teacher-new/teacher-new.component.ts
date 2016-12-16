import { TeacherModel } from './../../shared/definitions/teacher.model';
import { ITeachersService } from '../../core/definitions/teachers.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './teacher-new.component.html',
  styleUrls: ['./teacher-new.component.css']
})
export class TeacherNewComponent implements OnInit {

  private teacher: TeacherModel;

  constructor(
    private router: Router,
    @Inject('ITeachersService') private teachersSer: ITeachersService
  ) { }

  ngOnInit() {
    this.teacher = new TeacherModel();
  }

  afterUpdateTeacher(): void {    
    this.teachersSer.create(this.teacher);
    this.router.navigate(['/teachers']);
  }

}