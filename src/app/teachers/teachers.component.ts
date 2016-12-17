import { Observable, Subscription } from 'rxjs/Rx';
import { TeacherModel } from '../shared/definitions/teacher.model';
import { ITeachersService } from '../core/definitions/teachers.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  private teachers:TeacherModel[] = [];
  private orderKey: string;  

  constructor( 
    @Inject('ITeachersService') private teacherSer: ITeachersService, 
    private router: Router
  ) { }

  ngOnInit() {    
    this.teacherSer.getTeachers().subscribe(
      (teachers) =>{ (this.teachers = teachers)}
    );            
  }

  orderEvent(key): void {
    this.orderKey = key;
  }

}
