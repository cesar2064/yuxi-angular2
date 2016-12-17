import { FormBuilder } from '@angular/forms';
import { TeacherFormComponent, TEACHER_FORM_COMPONENT_METADATA } from './../shared/teacher-form/teacher-form.component';
import { ITeachersService } from '../../core/definitions/teachers.service';
import { TeacherModel } from '../../shared/definitions/teacher.model';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component(TEACHER_FORM_COMPONENT_METADATA)
export class TeacherEditComponent extends TeacherFormComponent {

  protected teacher: TeacherModel;

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    @Inject('ITeachersService') protected teachersSer: ITeachersService,
    protected formBuilder: FormBuilder
  ) {
    super(formBuilder, router,teachersSer, 'Edit a teacher');
  }

}
