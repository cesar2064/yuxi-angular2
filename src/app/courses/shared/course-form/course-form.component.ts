import { IUtilsService } from '../../../shared/definitions/utils.service';
import { ICoursesService } from '../../../shared/definitions/courses.service';
import { TeacherModel } from '../../../shared/definitions/teacher.model';
import { ITeachersService } from '../../../shared/definitions/teachers.service';
import { CourseModel } from '../../../shared/definitions/course.model';
import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common/src/pipes';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() course: CourseModel;
  @Output() courseUpdated: EventEmitter<{
    id?: number,
    name: string,
    hours: number,
    startDate: Date,
    teacherId: number
  }> = new EventEmitter();

  private teachers: TeacherModel[];
  private courseForm: FormGroup;
  private datePipe: DatePipe;

  constructor(
    @Inject('ITeachersService') private teacherSer: ITeachersService,
    @Inject('ICoursesService') private coursesSer: ICoursesService,
    @Inject('IUtilsService') private utilsSer: IUtilsService,
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
      startDate: [this.datePipe.transform(course.startDate, 'd/M/y')],
      teacherId: [course.teacherId]
    })
  }

  saveCourse(event: Event): void {
    event.preventDefault();
    let json = this.courseForm.value;
    json.startDate = this.utilsSer.parseDate(json.startDate,'DD/MM/YY');
    json.id = this.course.id;
    this.courseUpdated.emit(json);
  }

}
