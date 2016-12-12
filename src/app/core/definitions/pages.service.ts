import { PageModel } from './page.model';

export interface IPagesService {  
  getPages():PageModel[];
  setActive(id:number):void;
  setActiveByLink(link:string):void;
}
