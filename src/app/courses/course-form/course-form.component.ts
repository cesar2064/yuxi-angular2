import { ConstantsService } from './../../core/constants.service';
import { IUtilsService } from '../../shared/definitions/utils.service';
import { TeacherModel } from '../../shared/definitions/teacher.model';
import { ITeachersService } from '../../core/definitions/teachers.service';
import { CourseModel } from '../../shared/definitions/course.model';
import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common/src/pipes';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  private title:string;
  @Input() course: CourseModel;
  @Output() afterUpdateUser: EventEmitter<CourseModel> = new EventEmitter();

  private teachers: TeacherModel[];
  private courseForm: FormGroup;
  private datePipe: DatePipe;

  constructor(
    @Inject('ITeachersService') private teacherSer: ITeachersService,    
    @Inject('IUtilsService') private utilsSer: IUtilsService,
    private CONSTANTS:ConstantsService,   
    private formBuilder: FormBuilder
  ) {
    this.datePipe = new DatePipe('en-Us');
  }

  ngOnInit() {
    this.teachers = this.teacherSer.getTeachers();
    this.courseForm = this.formGroup();
  }

  private formGroup(): FormGroup {
    let course = this.course;
    return this.formBuilder.group({
      name: [course.name],
      hours: [course.hours],
      startDate: [this.datePipe.transform(course.startDate, this.CONSTANTS.TIME.ANGULAR_DEFAULT_FORMAT), this.validateStartDate(this)],
      teacherId: [course.teacherId, this.validateTeacher]
    })
  }

  private validateTeacher(c: FormControl) {
    if (c.value === 0) {
      return {
        valid: false
      }
    }
  };

  private validateStartDate(that) {
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
    this.afterUpdateUser.emit(
      Object.assign(this.course,json)
    );
  }

}
