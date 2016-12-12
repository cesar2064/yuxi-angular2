import { CourseModel } from './definitions/course.model';
import { ICoursesService } from './definitions/courses.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService implements ICoursesService{

  private courses:CourseModel[] = [
    new CourseModel(1,'Angular 2',32,new Date('01/01/2017')),
    new CourseModel(2,'Ionic 2',20,new Date('12/01/2017')),
    new CourseModel(3,'Test automation',30,new Date('05/15/2016')),
    new CourseModel(4,'Machine Learning',45,new Date('05/01/2017'))
  ]

  constructor() { }

  getCourses():CourseModel[]{
    return this.courses;
  }
  
  getById(id:Number):CourseModel{
    return this.courses.find(course=> course.id === id);
  }

}
