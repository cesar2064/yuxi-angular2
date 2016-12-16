import { ConstantsService } from './../../core/constants.service';
import { FormBuilder } from '@angular/forms';
import { IUtilsService } from './../../shared/definitions/utils.service';
import { ITeachersService } from './../../core/definitions/teachers.service';
import { CourseFormComponent, COURSE_FORM_COMPONENT_METADATA } from '../shared/course-form/course-form.component';
import { ICoursesService } from '../../core/definitions/courses.service';
import { CourseModel } from '../../shared/definitions/course.model';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component(COURSE_FORM_COMPONENT_METADATA)
export class CourseNewComponent extends CourseFormComponent {

  constructor(
    protected router: Router,
    protected CONSTANTS: ConstantsService,
    protected formBuilder: FormBuilder,
    @Inject('ITeachersService') protected teacherSer: ITeachersService,
    @Inject('IUtilsService') protected utilsSer: IUtilsService,
    @Inject('ICoursesService') protected courseSer: ICoursesService,
  ) {
    super(teacherSer, utilsSer, CONSTANTS, formBuilder, router, 'Create a course');
  }

  ngOnInit() {
    this.course = new CourseModel();
    super.ngOnInit();
  }

  saveCourse(event: Event): void {
    super.saveCourse(event);
    this.courseSer.create(this.course);
  }

}