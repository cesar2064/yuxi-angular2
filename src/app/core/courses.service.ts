import { Observable } from 'rxjs/Rx';
import { ConstantsService } from './constants.service';
import { Http } from '@angular/http';
import { CourseModel } from '../shared/definitions/course.model';
import { ICoursesService } from './definitions/courses.service';
import { Injectable } from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoursesService implements ICoursesService {

  private apiUrl: string;

  constructor(
    private http: Http,
    private CONSTANTS: ConstantsService
  ) {
    this.apiUrl = `${CONSTANTS.BACKEND_API}/courses`;
  }

  getCourses(): Observable<CourseModel[]> {
    return this.http.get(this.apiUrl).map(
      res => res.json().data
    );
  }

  getById(id: Number): Observable<CourseModel> {
    return this.http.get(`${this.apiUrl}/${id}`).map(
      res => res.json().data
    );
  }

  create(course: CourseModel): Observable<CourseModel> {
    course as { id?: number, name: string, hours: number, startDate: Date, teacherId: number }

    if (course.id)
      return this.http.put(`${this.apiUrl}/${course.id}`, course).map(
        res => res.json().data
      )

    return this.http.post(this.apiUrl, course).map(
      res => res.json().data
    )
  }

}
