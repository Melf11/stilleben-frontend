import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit, PLATFORM_ID,
  Renderer2
} from '@angular/core';
import {PageInterface} from '../../../interfaces/page.interface';
import {SectionInterface} from '../../../interfaces/section.interface';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {NavigationService} from '../../../services/navigation.service';
import {FrontendService} from '../../../services/frontend.service';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {Animations} from "../../../../layout/utils/animations";

@Component({
  selector: 'slm-header-component',
  templateUrl: 'header.component.html',
  animations: [
    Animations.fadeInOut
  ]
})
export class SlmHeaderComponent implements OnInit, OnDestroy {

  sections: Array<SectionInterface> = [];

  activePage: PageInterface | undefined;

  isLoading = false;
  mobileNavOpen = false;
  sectionListHidden = true;
  sectionListRightAlign = false;
  sectionHiddenTimeout: any | null;

  navElements: Array<HTMLElement> = [];
  subscriptions: Array<Subscription> = [];

  lastScroll = 0;
  scrollCounter = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollTop = this._document.documentElement.scrollTop;

    if (this.lastScroll < scrollTop) {
      if (this.scrollCounter > 50) {
        this._document.getElementById('slm-header-global')?.classList.add('slm-header--hidden');
      }
    } else {
      this._document.getElementById('slm-header-global')?.classList.remove('slm-header--hidden');
      this.scrollCounter = 0;
    }
    this.scrollCounter += 1;
    this.lastScroll = scrollTop;

    if (this.sectionHiddenTimeout) { clearTimeout(this.sectionHiddenTimeout); }
    this.sectionListHidden = false;

    if (scrollTop > 150) {
      this._document.getElementById('slm-header-global')?.classList.add('slm-header--small');
      this._document.getElementById('back-to-top-button')?.classList.remove('back-to-top--hidden');
    } else {
      this._document.getElementById('slm-header-global')?.classList.remove('slm-header--small');
      this._document.getElementById('back-to-top-button')?.classList.add('back-to-top--hidden');
      this.initSectionMenu();
    }

    if (scrollTop < 50) {
      this.sectionListHidden = true;
    }
    this.sectionHiddenTimeout = setTimeout(() => {
      this.sectionListHidden = true;
    }, 1500);
  }

  constructor(
    private elRef: ElementRef,
    private router: Router,
    public navigationService: NavigationService,
    private frontendService: FrontendService,
    public translateService: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) public _document: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this._document.getElementById('slm-header-global')?.classList.add('slm-header--hide-pre');
    this._document.getElementById('slm-header-global')?.classList.add('slm-header--hidden');
  }

  ngOnInit() {
    this.isLoading = true;
    this.subscriptions.push(
      this.navigationService.$activePage.subscribe(page => {
        this.activePage = page;
        this.scrollToTop();
        this._document.getElementById('slm-header-global')?.classList.remove('slm-header--hidden');
      }),
      this.navigationService.$sectionInView.subscribe(section => {
        this.setActiveNavElement(section, this.activePage);
      })
    );

    this.sections.forEach(section => {
      if (this._document.getElementById(this.sectionId(section.title) + '-nav')) {
        const el = this._document.getElementById(this.sectionId(section.title) + '-nav');
        if (el) { this.navElements.push(el); }
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(_ => _.unsubscribe());
  }

  setActiveNavElement(sectionInView: SectionInterface, page: PageInterface | undefined) {
    page?.sections.forEach(section => {
      let el: HTMLElement | null;
      if (window.innerWidth > 995) {
        el = this._document.getElementById(this.sectionId(section.title) + '-nav');
      } else {
        el = this._document.getElementById(this.sectionId(section.title) + '-nav-mobile');
      }

      const sectionBackground = this._document.getElementById(this.sectionId(page.title) + '-section-background');
      if (el && sectionBackground) {
        if (section.title === sectionInView.title) {
          this.renderer.setStyle(sectionBackground, 'min-width', el.clientWidth - 10 + 'px');
          this.renderer.setStyle(sectionBackground, 'left', el.offsetLeft + 5 + 'px');
          el.classList.add('slm-header__main__nav__list__item__section-list__item--active');
        } else {
          el.classList.remove('slm-header__main__nav__list__item__section-list__item--active');
        }
      }
    });
  }

  scrollToTop() {
    this.initSectionMenu();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  navigateToSection(section: SectionInterface) {
    this.sectionListHidden = false;
    const el = this._document.getElementById(this.sectionId(section.title));
    if (el && isPlatformBrowser(this.platformId)) {
      window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'});
    }
    setTimeout(() => {
      this.sectionListHidden = true;
    }, 1500);
  }


  navigateToPage(page: PageInterface) {
    this.navigationService.$activePage.next(page);
    this.router.navigate(['/', this.translateService.currentLang, this.sectionId(page.title)]);
  }

  navigateHome() {
    this.frontendService.getPages().subscribe(pages => {
      const homepage = pages.find(_ => this.sectionId(_.title) === 'home');
      this.navigationService.$activePage.next(homepage);
      this.router.navigate(['/', this.translateService.currentLang, 'home']);
    });
  }

  sectionId(sectionTitle: string): string {
    return sectionTitle.replace(/\s/g, '').toLowerCase();
  }

  checkActivePage(item: PageInterface): boolean {
    if (!this.activePage) { return false; }
    return item?.title === this.activePage.title;
  }

  initSectionMenu() {
    if (this.activePage) {
      const sectionBackgrounds = [];
      sectionBackgrounds.push(this._document.getElementById(this.sectionId(this.activePage.title) + '-section-background'), this._document.getElementById(this.sectionId(this.activePage.title) + '-mobile-section-background'));
      sectionBackgrounds.forEach(_ => {
        if (_) {
          this.renderer.setStyle(_, 'min-width', 0 + 'px');
          this.renderer.setStyle(_, 'left', 5 + 'px');
        }
      });
    }
  }

  get theme(): string {
    return this._document.documentElement.dataset['theme']
  }

  switchColorTheme() {
    if (this._document?.documentElement?.dataset['theme']) {
      if (this._document.documentElement.dataset['theme'] === 'theme-light') {
        localStorage.setItem('slm-color-scheme', 'theme-dark');
        this._document.documentElement.dataset['theme'] = 'theme-dark';
      } else {
        localStorage.setItem('slm-color-scheme', 'theme-light');
        this._document.documentElement.dataset['theme'] = 'theme-light';
      }
    }
  }
}
