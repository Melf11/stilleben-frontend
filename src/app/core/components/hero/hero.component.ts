import {
    Component,
    ElementRef,
    HostBinding,
    HostListener, Inject, OnChanges,
    OnDestroy,
    OnInit, SimpleChanges,
} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {MarkdownService} from 'ngx-markdown';
import {DOCUMENT} from '@angular/common';
import {PageInterface} from '../../interfaces/page.interface';
import {NavigationService} from '../../services/navigation.service';
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'slm-hero-component',
    templateUrl: 'hero.component.html',
})
export class SlmHeroComponent implements OnInit, OnChanges, OnDestroy {

    page: PageInterface | undefined;

    @HostBinding('class') class = 'slm-hero';

    subscriptions: Array<Subscription> = [];

    moreHeight = false;

    _options = environment;

    constructor(
        private elementRef: ElementRef,
        private router: Router,
        private navigationService: NavigationService,
        private markdownService: MarkdownService,
        @Inject(DOCUMENT) private _document: any
    ) {
        this.elementRef.nativeElement.classList.add('slm-hero--background-hidden');
    }

    ngOnInit() {
        this.checkRatios();

        this.subscriptions.push(
            this.navigationService.$activePage.subscribe(page => {
                if (page?.hero_background) {
                    this.elementRef.nativeElement.classList.remove('slm-hero--small');
                } else {
                    const homePage = this.navigationService.pages.find(_ => _.title.toLowerCase() === 'home');
                    if (homePage?.hero_background) {
                        page.hero_background = homePage.hero_background;
                    }
                    this.elementRef.nativeElement.classList.add('slm-hero--small');
                }
                this.page = page;
            })
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        this.checkRatios();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(_ => _.unsubscribe());
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.checkRatios();
    }

    checkRatios() {
        const heroBackElement = this._document.getElementById('heroBack');
        if (heroBackElement) {
            const screenRatio = window.innerHeight / window.innerWidth;
            const imageRatio = heroBackElement.clientHeight / heroBackElement.clientWidth;

            if (screenRatio > imageRatio) {
                this.elementRef.nativeElement.classList.add('slm-hero--more-width');
                this.elementRef.nativeElement.classList.remove('slm-hero--more-height');
            } else {
                this.elementRef.nativeElement.classList.add('slm-hero--more-height');
                this.elementRef.nativeElement.classList.remove('slm-hero--more-width');
            }
        }
    }


    get heroUrl(): string | null {
        if (this.page?.hero_background?.url) {
            return this._options.api + this.page?.hero_background?.url;
        }
        return null;
    }

    getMarkdownRenderer(text: string): string {
        return this.markdownService.compile(text);
    }

    loadedImage(event: any) {
        this.checkRatios();
        if (event.reason === 'finally') {
            this.elementRef.nativeElement.classList.remove('slm-hero--background-hidden');
        }
    }
}
