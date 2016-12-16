import {TeacherModel} from '../../shared/definitions/teacher.model';

export interface ITeachersService{
    getTeachers():TeacherModel[];
    getById(id:number):TeacherModel;
    create(teacher:TeacherModel):void;
}