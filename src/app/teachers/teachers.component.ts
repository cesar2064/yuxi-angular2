import { TeacherModel } from '../shared/definitions/teacher.model';
import { ITeachersService } from '../core/definitions/teachers.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  private orderKey: string;
  private teachers: TeacherModel[];

  constructor( 
    @Inject('ITeachersService') private teacherSer: ITeachersService, 
    private router: Router
  ) { }

  ngOnInit() {    
    this.teachers = this.teacherSer.getTeachers();
  }

  orderEvent(key): void {
    this.orderKey = key;
  }
}
