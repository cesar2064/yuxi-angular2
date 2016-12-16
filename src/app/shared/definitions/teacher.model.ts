export class TeacherModel{
  constructor(
    private _id?:number,
    private _name?:string,
    private _lastName?:string
  ){}

  get id():number{
    return this._id;
  }

  set id(id:number){
    this._id = id;
  }

  get name():string{
    return this._name;
  }

  set name(name:string){
    this._name=name;
  } 

  get lastName():string{
    return this._lastName;
  }

  set lastName(lastName:string){
    this._lastName = lastName;
  }

}