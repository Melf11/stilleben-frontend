import {Injectable} from '@angular/core';
import {Route, Router, Routes} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {FrontendService} from './frontend.service';
import {PageInterface} from '../interfaces/page.interface';
import {SlmRootRootPage} from "../../pages/root/root/root.page";
import {SlmRootIndexPage} from "../../pages/root/index/root.page";
import {SlmNotFoundPage} from "../../pages/not-found/not-found.page";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class RouteLoader {

    _options = environment;

    constructor(
        private frontendService: FrontendService,
        private router: Router,
    ) {}

    public load(): Observable<Routes> {
        return this.frontendService.getPages().pipe(switchMap(pages => this.createRoutes(pages)));
    }

    private createRoutes(pages: Array<PageInterface>): Observable<Routes> {
        return of(pages).pipe(
            map(getRoutes => {
                const res = [];
                getRoutes.forEach(_ => res.push(this.toRoute(_)));
                res.push(this.getNotFoundRouteData());
                return res;
            }),
            map(newRoutes => [...this.router.config, ...newRoutes])
        );
    }

    private toRoute(page: PageInterface): Route {
        return ({
            path: ':lang/' + page.title.replace(/\s/g, '').toLowerCase(),
            component: SlmRootRootPage,
            data: {
                id: page.title.replace(/\s/g, '').toLowerCase(),
                name: page.title,
            },
            children: [
                {
                    path: '',
                    component: SlmRootIndexPage
                }
            ]
        });
    }

    getNotFoundRouteData(): Route {
        return {
            path: ':lang',
            component: SlmRootRootPage,
            children: [
                {
                    path: '**',
                    component: SlmNotFoundPage
                }
            ]
        };
    }
}
