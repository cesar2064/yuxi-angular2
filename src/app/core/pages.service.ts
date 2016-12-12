import { IPagesService } from './definitions/pages.service';
import { PageModel } from './definitions/page.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesService implements IPagesService {

  private pages: PageModel[] = [
    new PageModel(1, 'Home', '/home', true),
    new PageModel(2, 'Courses', '/courses'),
    new PageModel(3, 'Teachers', '/')
  ]

  constructor() { }

  getPages(): PageModel[] {
    return this.pages;
  }

  setActive(id: number): void {
    this.pages.forEach((page) => {
      page.getId() === id ? page.setActive(true) : page.setActive(false);
    });
  }

  setActiveByLink(link: string): void {
    this.pages.forEach((page) => {
      page.getLink() === link ? page.setActive(true) : page.setActive(false);
    });
  }

}
