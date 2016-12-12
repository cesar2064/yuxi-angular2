export class PageModel {
  constructor(
    private id: number,
    private name: string,
    private link: string,
    private matcher:RegExp,
    private active: boolean = false,
    private visible: boolean = true
  ) { }

  getId():number{
    return this.id;
  }

  getName():string{
    return this.name;
  }

  getMatcher():RegExp{
    return this.matcher;
  }
  getLink():string{
    return this.link;
  }

  isVisible(){
    return this.visible;
  }  

}