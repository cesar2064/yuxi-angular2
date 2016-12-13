export class CourseModel {
  constructor(
    private _id: number,
    private _name: string,
    private _hours: number,
    private _startDate: Date = new Date()
  ) { }
  
  get id():number{
    return this._id
  }  
  
  get name():string{
    return this._name;
  }

  get hours():number{
    return this._hours;
  }

  get startDate():Date{
    return this._startDate;
  }

}