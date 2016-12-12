import { Router } from '@angular/router';
import { PageModel } from '../definitions/page.model';
import { IPagesService } from '../definitions/pages.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  private pages: PageModel[];

  constructor(
    @Inject('IPagesService') private pagesServ: IPagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.pages = this.pagesServ.getPages();
    this.router.events.subscribe((event) => {
      this.pagesServ.setActiveByLink(event.url);
    });
  }

}
