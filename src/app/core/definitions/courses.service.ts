import { CourseModel } from '../../shared/definitions/course.model';
export interface ICoursesService{
  getCourses():CourseModel[];
  getById(id:Number):CourseModel;
  create(course:CourseModel):void;
}