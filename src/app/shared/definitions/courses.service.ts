import { CourseModel } from './course.model';
export interface ICoursesService{
  getCourses():CourseModel[];
  getById(id:Number):CourseModel;
  create(course:CourseModel):void;
  save(course:{
    id?: number,
    name: string,
    hours: number,
    startDate: Date,
    teacherId: number
  }):void;
}