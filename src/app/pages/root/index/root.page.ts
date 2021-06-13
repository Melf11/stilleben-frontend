import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {SectionInterface} from "../../../core/interfaces/section.interface";
import {FrontendService} from "../../../core/services/frontend.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {PageInterface} from "../../../core/interfaces/page.interface";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'slm-root-index-page',
    templateUrl: 'root.page.html'
})
export class SlmRootIndexPage implements OnInit, OnDestroy {

    sections: Array<SectionInterface> = [];
    subscription: Array<Subscription> = [];

    _environment = environment;

    constructor(
        private frontendService: FrontendService,
        private navigationService: NavigationService,
        private route: ActivatedRoute,
        private router: Router,
        private metaService: Meta,
        private titleService: Title,
        public translateSerivce: TranslateService,
    ) {}

    ngOnInit() {
        if (this.route.snapshot.data['id']) {
            this.frontendService.getPages().subscribe( pages => {
                const savedPage = pages.find(_ => this.sectionId(_.title) === this.route.snapshot.data['id']);
                if (savedPage) {
                    this.navigationService.$activePage.next(savedPage);
                    this.setMetaData(savedPage);
                    this.sections = this.getSections(savedPage);
                }
            });
        }
    }

    ngOnDestroy() {
        this.subscription.forEach(_ => _.unsubscribe());
    }

    getSections(page: PageInterface) {
        page.sections.forEach((page_section, index) => {
            this.frontendService.getSectionById(page_section.id).subscribe(section => {
                page.sections[index] = section;
            });
        });
        return page.sections;
    }


    sectionId(sectionTitle: string): string {
        return sectionTitle.replace(/\s/g, '').toLowerCase();
    }

    setActiveSection(event: boolean, section: SectionInterface) {
        if (event) {
            this.navigationService.$sectionInView.next(section);
        }
    }

    setMetaData(page: PageInterface) {
        const homePage = this.navigationService.pages.find(_ => _.title.toLowerCase() === 'home');
        if (page?.title) {
            this.titleService.setTitle(page.title + ' - ' + this._environment.title);
            this.setTags([
                {selector: 'og:title', tagContent: page.title + ' - ' + this._environment.title},
                {selector: 'og:site_name', tagContent: page.title + ' - ' + this._environment.title}
            ]);

        } else {
            this.titleService.setTitle(homePage?.title + ' - ' + this._environment.title);
            this.setTags([
                {selector: 'og:title', tagContent: homePage?.title + ' - ' + this._environment.title},
                {selector: 'og:site_name', tagContent: homePage?.title + ' - ' + this._environment.title}
            ]);
        }
        if (page?.description) {
            this.setTags([
                {selector: 'description', tagContent: page.description},
                {selector: 'og:description', tagContent: page.description}
            ]);
        } else {
            this.setTags([
                {selector: 'description', tagContent: homePage?.description as string},
                {selector: 'og:description', tagContent: homePage?.description as string}
            ]);
        }
        this.setTags([
            {selector: 'or:url', tagContent: this._environment.meta['url'] + '/' + this.route.snapshot.url.join('/')},
            {selector: 'og:image', tagContent: this._environment.api + homePage?.hero_background.url as string}
        ]);
    }

    setTags(tags: Array<{ selector: string, tagContent: string }>) {
        tags.forEach(_ => {
            if (this.metaService.getTag(`name="${_.selector}"`)) {
                this.metaService.removeTag(`name="${_.selector}"`);
            }
            ;
            this.metaService.addTag({name: _.selector, content: _.tagContent});
        });

    }
}
