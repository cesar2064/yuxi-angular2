export class PageModel {
  constructor(
    private _id: number,
    private _name: string,
    private _link: string,    
    private _active: boolean = false,
    private _visible: boolean = true
  ) { }

  get id():number{
    return this._id;
  }

  get name():string{
    return this._name;
  }
  
  get link():string{
    return this._link;
  }

  get visible(){
    return this._visible;
  }  

}