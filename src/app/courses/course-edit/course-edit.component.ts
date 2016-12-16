import { FormBuilder } from '@angular/forms';
import { ConstantsService } from './../../core/constants.service';
import { IUtilsService } from './../../shared/definitions/utils.service';
import { ITeachersService } from './../../core/definitions/teachers.service';
import { CourseFormComponent, COURSE_FORM_COMPONENT_METADATA } from '../shared/course-form/course-form.component';
import { ICoursesService } from '../../core/definitions/courses.service';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component(COURSE_FORM_COMPONENT_METADATA)
export class CourseEditComponent extends CourseFormComponent {

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    protected CONSTANTS: ConstantsService,
    protected formBuilder: FormBuilder,
    @Inject('ITeachersService') protected teacherSer: ITeachersService,
    @Inject('IUtilsService') protected utilsSer: IUtilsService,
    @Inject('ICoursesService') protected courseSer: ICoursesService,
  ) {
    super(teacherSer, utilsSer, CONSTANTS, formBuilder, router, 'Edit a course');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.course = this.courseSer.getById(id);
    });
    super.ngOnInit();
  }

}
