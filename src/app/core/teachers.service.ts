import { ITeachersService } from '../shared/definitions/teachers.service';
import { TeacherModel } from '../shared/definitions/teacher.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TeachersService implements ITeachersService{
  private teachers: TeacherModel[] = [
    new TeacherModel(1, 'Bob', 'Alicon'),
    new TeacherModel(2, 'Jhony', 'Bravo'),
    new TeacherModel(2, 'Alcor', 'Noque'),
    new TeacherModel(2, 'Barry', 'Gota')
  ];
  constructor() { }
  
  getTeachers():TeacherModel[]{
    return this.teachers;
  }
  

}
