import { ITeachersService } from './definitions/teachers.service';
import { TeacherModel } from '../shared/definitions/teacher.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TeachersService implements ITeachersService {
  private teachers: TeacherModel[] = [
    new TeacherModel(1, 'Bob', 'Alicon'),
    new TeacherModel(2, 'Jhony', 'Bravo'),
    new TeacherModel(3, 'Alcor', 'Noque'),
    new TeacherModel(4, 'Barry', 'Gota')
  ];
  constructor() { }

  getTeachers(): TeacherModel[] {
    return this.teachers;
  }

  getById(id: number): TeacherModel {
    return this.teachers.find(teacher => teacher.id === id);
  }

  create(teacher: TeacherModel): void {
    let length = this.teachers.length;
    teacher.id = length + 1;
    this.teachers[length] = teacher;
  }

}
