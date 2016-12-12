export class CourseModel {
  constructor(
    private id: number,
    private name: string,
    private hours: number,
    private startDate: Date = new Date()
  ) { }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getHours(): number {
    return this.hours;
  }

  getStartDate(): Date {
    return this.startDate;
  }

}