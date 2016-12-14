import {TeacherModel} from './teacher.model';

export interface ITeachersService{
    getTeachers():TeacherModel[];
}