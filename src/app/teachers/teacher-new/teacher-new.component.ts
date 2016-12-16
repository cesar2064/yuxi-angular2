import { FormBuilder } from '@angular/forms';
import { TeacherFormComponent, TEACHER_FORM_COMPONENT_METADATA } from './../shared/teacher-form/teacher-form.component';
import { TeacherModel } from './../../shared/definitions/teacher.model';
import { ITeachersService } from '../../core/definitions/teachers.service';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component(TEACHER_FORM_COMPONENT_METADATA)
export class TeacherNewComponent extends TeacherFormComponent {

  protected teacher: TeacherModel;

  constructor(
    protected router: Router,
    @Inject('ITeachersService') private teachersSer: ITeachersService,
    protected formBuilder: FormBuilder    
  ) {
    super(formBuilder,router,'Creating a teacher');
   }

  ngOnInit() {
    this.teacher = new TeacherModel();
    super.ngOnInit();
  }

  saveTeacher(event:Event): void {    
    super.saveTeacher(event);    
    this.teachersSer.create(this.teacher);    
  }

}