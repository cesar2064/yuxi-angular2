import { CourseModel } from './course.model';
export interface ICoursesService{
  getCourses():CourseModel[];
}