import { ConstantsService } from './constants.service';
import { Http } from '@angular/http';
import { ITeachersService } from './definitions/teachers.service';
import { TeacherModel } from '../shared/definitions/teacher.model';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TeachersService implements ITeachersService {  

  private teachersUrl:string;
  
  constructor(
    private http:Http,
    private CONSTANTS:ConstantsService
  ) {
    this.teachersUrl = `${CONSTANTS.BACKEND_API}/teachers`;
   }

  getTeachers(): Observable<TeacherModel[]> {    
    return this.http.get(this.teachersUrl).map(
      res => res.json().data
    );
  }

  getById(id: number): Observable<TeacherModel> {
    return this.http.get(`${this.teachersUrl}/${id}`).map(
      res => res.json()
    );
  }

  save(teacher:{
    id?:number,
    name:string,
    lastName:string
  }): Observable<TeacherModel> {  

    if(teacher.id)  
      return this.http.put(`this.teachersUrl/${teacher.id}`,teacher).map(
        res => res.json()
      )
    
    return this.http.post(this.teachersUrl,teacher).map(
      res=> res.json()
    )
  }

}
