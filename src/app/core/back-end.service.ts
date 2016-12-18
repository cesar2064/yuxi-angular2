import { CourseModel } from './../shared/definitions/course.model';
import { TeacherModel } from './../shared/definitions/teacher.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class BackendService implements InMemoryDbService {
    private teachers:TeacherModel[] = [
        { id: 1, name: 'Bob', lastName: 'Alicon' },
        { id: 2, name: 'Jhony', lastName: 'Bravo' },
        { id: 3, name: 'Alcor', lastName: 'Noque' },
        { id: 4, name: 'Barry', lastName: 'Gota' }
    ];

    private courses:CourseModel[] = [
        {id:1,name:'Angular 2', hours:32,startDate:new Date(), teacherId:1}
    ]
    createDb() {
        return { teachers:this.teachers };
    }
}    