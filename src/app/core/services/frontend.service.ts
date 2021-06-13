import {Inject, Injectable, Injector} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PageInterface} from '../interfaces/page.interface';
import {ElementInterface} from '../interfaces/element.interface';
import {SectionInterface} from '../interfaces/section.interface';
import {UserInterface} from '../interfaces/user.interface';
import {environment} from "../../../environments/environment";

export let InjectorInstance: Injector;

@Injectable({
    providedIn: 'root'
})
export class FrontendService {

    static responseCache = new Map();
    static _optionsS: any;
    _options = environment;

    constructor(
        private _api: HttpClient,
        private injector: Injector,
    ) {
        InjectorInstance = this.injector;
        FrontendService._optionsS = this._options;
    }

    ////////////////////////////////////////////////
    // Static Functions
    ////////////////////////////////////////////////

    public static me(): Observable<UserInterface> {
        return FrontendService.getFromApi(FrontendService._optionsS ? FrontendService._optionsS.api  + '/users/me' : 'NO_API_SET! SET MODULE OPTIONS IN DECLARATION') as Observable<UserInterface>;
    }

    // General Api Call with Caching
    ////////////////////////
    static getFromApi(url: string): Observable<any> {
        const fromCache = FrontendService.responseCache.get(url);
        if (fromCache) {
            return of(fromCache);
        }

        const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
        const response = httpClient.get<Array<PageInterface>>(url);
        response.subscribe(elements => FrontendService.responseCache.set(url, elements));
        return response;
    }

    // Settings Routes
    ////////////////////////
    static getSettings(): Observable<any> {
        return FrontendService.getFromApi(FrontendService._optionsS ? FrontendService._optionsS.api  + '/settings' : 'NO_API_SET! SET MODULE OPTIONS IN DECLARATION') as Observable<any>;
    }

    // Page Routes
    ////////////////////////
    getPages(): Observable<Array<PageInterface>> {
        return this._api.get(this._options.api + '/pages?_sort=position:ASC,sections.position:ASC') as Observable<Array<PageInterface>>;
        // return FrontendService.getFromApi(this._options.api + '/pages?_sort=position:ASC,sections.position:ASC') as Observable<Array<PageInterface>>;
    }

    getPageById(id: number | string): Observable<PageInterface> {
        return this._api.get(this._options.api + '/pages/' + id) as Observable<PageInterface>;
    }

    // Section Routes
    ////////////////////////
    getSections(): Observable<Array<SectionInterface>> {
        return this._api.get(this._options.api + '/sections?_sort=position:ASC,elements.position:ASC') as Observable<Array<SectionInterface>>;
    }

    getSectionById(id: string | number): Observable<SectionInterface> {
        return this._api.get(this._options.api + '/sections/' + id) as Observable<SectionInterface>;
    }

    // Element Routes
    ////////////////////////
    getElements(): Observable<Array<ElementInterface>> {
        return this._api.get(this._options.api + '/elements?_sort=position:ASC') as Observable<Array<ElementInterface>>;
    }

    getElementById(id: string | number): Observable<ElementInterface> {
        return this._api.get(this._options.api + '/elements/' + id) as Observable<ElementInterface>;
    }


    setSettings(form: any): Observable<any> {
        return this._api.put(this._options.api + '/settings', form) as Observable<any>;
    }

}
