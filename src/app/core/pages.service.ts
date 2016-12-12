import { IPagesService } from './definitions/pages.service';
import { PageModel } from './definitions/page.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesService implements IPagesService {

  private pages: PageModel[] = [
    new PageModel(1, 'Home','/home'),
    new PageModel(2, 'Courses','/courses'),
    new PageModel(3, 'Teachers','/teachers')
  ]

  constructor() { }

  getPages(): PageModel[] {
    return this.pages;
  }

}
