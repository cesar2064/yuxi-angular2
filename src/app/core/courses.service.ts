import { CourseModel } from '../shared/definitions/course.model';
import { ICoursesService } from '../shared/definitions/courses.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService implements ICoursesService {

  private courses: CourseModel[] = [
    new CourseModel(1, 'Angular 2', 32, 1, new Date('01/01/2017')),
    new CourseModel(2, 'Ionic 2', 20, 2, new Date('12/01/2017')),
    new CourseModel(3, 'Test automation', 30, 3, new Date('05/15/2016')),
    new CourseModel(4, 'Machine Learning', 45, 4, new Date('05/01/2017'))
  ]

  constructor() { }

  getCourses(): CourseModel[] {
    return this.courses;
  }

  getById(id: Number): CourseModel {
    return this.courses.find(course => course.id === id);
  }

  create(course:CourseModel):void{
    course.id = this.courses.length;
    this.courses.push(course)
  }

  save(course:{
    id?: number,
    name: string,
    hours: number,
    startDate: Date,
    teacherId: number
  }):void{
    debugger
    let courseDB = this.getById(course.id);
    courseDB.name = course.name;
    courseDB.hours = course.hours;
    courseDB.startDate = course.startDate;
    courseDB.teacherId = course.teacherId;
  }

}
