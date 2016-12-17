import { Observable } from 'rxjs/Rx';
import {TeacherModel} from '../../shared/definitions/teacher.model';

export interface ITeachersService{
    getTeachers():Observable<TeacherModel[]>;
    getById(id:number):Observable<TeacherModel>;
    save(teacher:TeacherModel):Observable<TeacherModel>;
}