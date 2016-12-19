import { CourseModel } from './../shared/definitions/course.model';
import { TeacherModel } from './../shared/definitions/teacher.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class BackendService implements InMemoryDbService {
    private teachers = [
        { id: 1, name: 'Bob', lastName: 'Alicon' },
        { id: 2, name: 'Jhony', lastName: 'Bravo' },
        { id: 3, name: 'Alcor', lastName: 'Noque' },
        { id: 4, name: 'Barry', lastName: 'Gota' }
    ];

    private courses = [
        { id: 1, name: 'Angular 2', hours: 32, teacherId: 1, startDate: new Date() },
        { id: 2, name: 'Ionic 2', hours: 20, teacherId: 2, startDate: new Date() },
        { id: 3, name: 'Test automation', hours: 30, teacherId: 3, startDate: new Date() },
        { id: 4, name: 'Machine Learning', hours: 45, teacherId: 4, startDate: new Date() }
    ]
    createDb() {
        return { teachers: this.teachers, courses:this.courses };
    }
}    