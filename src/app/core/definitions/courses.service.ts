import { Observable } from 'rxjs/Rx';
import { CourseModel } from '../../shared/definitions/course.model';
export interface ICoursesService{
  getCourses():Observable<CourseModel[]>;
  getById(id:Number): Observable<CourseModel>;
  create(course:CourseModel):void;
}