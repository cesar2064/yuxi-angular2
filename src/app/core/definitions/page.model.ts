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

  isVisible(){
    return this.visible;
  }  

}