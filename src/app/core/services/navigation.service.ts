import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {FrontendService} from './frontend.service';
import {PageInterface} from '../interfaces/page.interface';
import {SectionInterface} from '../interfaces/section.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public pages: Array<PageInterface> = [];
  public preNavPages: Array<PageInterface> = [];
  public mainNavPages: Array<PageInterface> = [];
  public footerNavPages: Array<PageInterface> = [];

  $pages: Subject<Array<PageInterface>> = new Subject<Array<PageInterface>>();

  $activePage: Subject<PageInterface> = new Subject<PageInterface>();
  $sectionInView: Subject<SectionInterface> = new Subject<SectionInterface>();


  constructor(
    private frontendService: FrontendService
  ) {
    this.frontendService.getPages().subscribe( pages => {
      this.pages = pages;
      this.$pages.next(pages);

      this.preNavPages = pages.filter( _ => _.navigation === 'nav_pre');
      this.mainNavPages = pages.filter( _ => _.navigation === 'nav_main');
      this.footerNavPages = pages.filter( _ => _.navigation === 'nav_footer');

      const page = pages.find(_ => this.getPageId(_.title) === 'home');
      this.$activePage.next(page);
    });
  }

  getPageId(pageTitle: string): string {
    return pageTitle.replace(/\s/g, '').toLowerCase();
  }

}
