export class TeacherModel{
  constructor(
    private _id:number,
    private _name:string,
    private _lastName:string
  ){}

  get id():number{
    return this._id;
  }
  
  get name():string{
    return this._name;
  }

  get lastName():string{
    return this._lastName;
  }

}