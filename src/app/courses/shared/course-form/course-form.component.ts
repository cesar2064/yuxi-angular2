import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ConstantsService } from '../../../core/constants.service';
import { IUtilsService } from '../../../shared/definitions/utils.service';
import { TeacherModel } from '../../../shared/definitions/teacher.model';
import { ITeachersService } from '../../../core/definitions/teachers.service';
import { CourseModel } from '../../../shared/definitions/course.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common/src/pipes';

export const COURSE_FORM_COMPONENT_METADATA = {
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  stylesUrl: ['./course-form.component.css']
};

export class CourseFormComponent implements OnInit {  
  protected course: CourseModel;  
  protected courseForm: FormGroup;

  private teachers: Observable<TeacherModel[]>;
  
  private datePipe: DatePipe;

  constructor(
    protected teacherSer: ITeachersService,    
    protected utilsSer: IUtilsService,
    protected CONSTANTS:ConstantsService,   
    protected formBuilder: FormBuilder,
    protected router:Router,
    protected title:string    
  ) {
    this.datePipe = new DatePipe('en-Us');
  }

  ngOnInit() {
    this.teachers = this.teacherSer.getTeachers()
    this.courseForm = this.formGroup();
  }

  protected formGroup(): FormGroup {
    let course = this.course;
    return this.formBuilder.group({
      name: [course.name],
      hours: [course.hours],
      startDate: [this.datePipe.transform(course.startDate, this.CONSTANTS.TIME.ANGULAR_DEFAULT_FORMAT), this.validateStartDate(this)],
      teacherId: [course.teacherId, this.validateTeacher]
    })
  }

  protected validateTeacher(c: FormControl) {
    if (c.value === 0) {
      return {
        valid: false
      }
    }
  };

  protected validateStartDate(that) {
    return (c: FormControl) => {
      if (that.utilsSer.parseDate(c.value, this.CONSTANTS.TIME.DEFAULT_FORMAT) <= new Date()) {
        return {
          valid: false
        }
      }
    }

  };

  saveCourse(event: Event): void {
    event.preventDefault();    
    let json = this.courseForm.value;
    json.startDate = this.utilsSer.parseDate(json.startDate, 'DD-MM-YYYY hh:mm A');  
    Object.assign(this.course,json);  
    this.router.navigate(['/courses']);        
  }

}
