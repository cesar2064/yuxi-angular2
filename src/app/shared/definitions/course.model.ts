export class CourseModel {
  constructor(
    private _id?: number,
    private _name?: string,
    private _hours?: number,
    private _teacherId: number = 0,
    private _startDate: Date = new Date(),
  ) { }

  get id(): number {
    return this._id
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get hours(): number {
    return this._hours;
  }

  set hours(hours: number) {
    this._hours = hours;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(startDate: Date) {
    this._startDate = startDate;
  }

  get teacherId(): number {
    return this._teacherId;
  }

  set teacherId(teacherId: number) {
    this._teacherId = teacherId;
  }

}