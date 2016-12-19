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

  private apiUrl:string;
  
  constructor(
    private http:Http,
    private CONSTANTS:ConstantsService
  ) {
    this.apiUrl = `${CONSTANTS.BACKEND_API}/teachers`;
   }

  getTeachers(): Observable<TeacherModel[]> {    
    return this.http.get(this.apiUrl).map(
      res => res.json().data
    );
  }

  getById(id: number): Observable<TeacherModel> {
    return this.http.get(`${this.apiUrl}/${id}`).map(
      res => res.json().data
    );
  }

  save(teacher:TeacherModel): Observable<TeacherModel> {  

    teacher as {id?:number, name:string,lastName:string}

    if(teacher.id)  
      return this.http.put(`${this.apiUrl}/${teacher.id}`,teacher).map(
        res => res.json()
      )
    
    return this.http.post(this.apiUrl,teacher).map(
      res=> res.json()
    )
  }

}
