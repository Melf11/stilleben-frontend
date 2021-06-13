import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {OrderModule} from 'ngx-order-pipe';
import {NgxParallaxModule} from '@yoozly/ngx-parallax';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {Router, RouterModule} from '@angular/router';
import {SlmElementComponent} from "./components/element/element.component";
import {SlmFormComponent} from "./components/form/form.component";
import {SlmHeroComponent} from "./components/hero/hero.component";
import {SlmSectionComponent} from "./components/section/section.component";
import {SlmHeaderComponent} from "./components/layout/header/header.component";
import {SlmFooterComponent} from "./components/layout/footer/footer.component";
import {SlmLayoutModule} from "../layout/layout.module";
import {HttpClient} from "@angular/common/http";
import {RouteLoader} from "./services/route-loader.service";


export function ensureRoutesExist(http: HttpClient, routeLoader: RouteLoader, router: Router) {
  const res = (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      routeLoader.load().subscribe(items => {
        if (items) {
          router.config = items;
          router.resetConfig(items);
          resolve();
        } else {
          reject();
        }

      });
    });
  };
  return res;
}


@NgModule({
  imports: [
    // Stilleben Modules
    SlmLayoutModule,

    // Angular Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    // Third Party Modules
    LazyLoadImageModule,
    NgxParallaxModule,
    OrderModule,
    RouterModule,
  ],
  declarations: [
    // Stilleben Core Components
    SlmElementComponent,
    SlmFormComponent,
    SlmHeroComponent,
    SlmSectionComponent,
    SlmHeaderComponent,
    SlmFooterComponent,

  ],
  exports: [
    // Stilleben Core Components
    SlmElementComponent,
    SlmFormComponent,
    SlmHeroComponent,
    SlmSectionComponent,
    SlmHeaderComponent,
    SlmFooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlmCoreModule {
  static forRoot(
  ): ModuleWithProviders<SlmCoreModule> {
    return {
      ngModule: SlmCoreModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: ensureRoutesExist,
          multi: true,
          deps: [
            HttpClient,
            RouteLoader,
            Router
          ],
        }
      ]
    };
  }
}
