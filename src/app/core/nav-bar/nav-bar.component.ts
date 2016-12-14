import { Router } from '@angular/router';
import { PageModel } from '../../shared/definitions/page.model';
import { IPagesService } from '../../shared/definitions/pages.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  private pages: PageModel[];

  constructor(
    @Inject('IPagesService') private pagesServ: IPagesService    
  ) { }

  ngOnInit() {
    this.pages = this.pagesServ.getPages();    
  }

}
