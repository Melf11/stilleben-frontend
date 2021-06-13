import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateModule,
  TranslateLoader
} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MarkdownModule} from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {ModalModule} from 'ngx-bootstrap/modal';
import {SecurityContext} from '@angular/core';
import {SlmComponent} from './slm.component';
import {SlmRouting} from './pages/slm-routing.module';
import {RfxParallaxModule} from 'rfx-parallax';
import {NgxParallaxModule} from '@yoozly/ngx-parallax';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GoogleMapsModule} from '@angular/google-maps';
import {SlmCoreModule} from "./core/core.module";
import {SlmLayoutModule} from "./layout/layout.module";
import {RouterModule} from "@angular/router";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}

// Handler for missing translations debuggin
export class TranslateHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.log('Missing translation for:', params.key);
  }
}


// @ts-ignore
@NgModule({
  declarations: [
    SlmComponent,
  ],
  imports: [
    SlmLayoutModule,
    SlmRouting,

    // Angular Modules
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({appId: 'stillleben'}),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
      // missingTranslationHandler: [{provide: MissingTranslationHandler, useClass: TranslateHandler}]
    }),

    // Third Party Modules
    GoogleMapsModule,
    LazyLoadImageModule,
    RfxParallaxModule,
    NgxParallaxModule,
    ModalModule.forRoot(),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    })
  ],
  providers: [],
  bootstrap: [SlmComponent]
})
export class SlmModule {
}
