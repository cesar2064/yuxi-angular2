export class PageModel {
  constructor(
    private id: number,
    private name: string,
    private link: string,
    private active: boolean = false,
    private visible: boolean = true
  ) { }

  getId():number{
    return this.id;
  }

  getName():string{
    return this.name;
  }

  getLink():string{
    return this.link;
  }

  isActive():boolean{
    return this.active;
  }

  setActive(active:boolean):void{
    this.active = active;
  }

  isVisible(){
    return this.visible;
  }  

}