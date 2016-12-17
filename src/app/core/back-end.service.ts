import { InMemoryDbService } from 'angular-in-memory-web-api';
export class BackendService implements InMemoryDbService {
    private teachers = [
        { id: 1, name: 'Bob', lastName: 'Alicon' },
        { id: 2, name: 'Jhony', lastName: 'Bravo' },
        { id: 3, name: 'Alcor', lastName: 'Noque' },
        { id: 4, name: 'Barry', lastName: 'Gota' }
    ];

    createDb() {
        return { teachers:this.teachers };
    }
}    