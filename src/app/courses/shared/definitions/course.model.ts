export class CourseModel {
  constructor(
    public id: number,
    public name: string,
    public hours: number,
    public startDate: Date = new Date()
  ) { }
}