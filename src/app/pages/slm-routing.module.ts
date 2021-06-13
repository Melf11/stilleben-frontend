import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../../environments/environment';
import {CommonModule} from '@angular/common';
import {OrderModule} from 'ngx-order-pipe';
import {ModalModule} from 'ngx-bootstrap/modal';
import {SlmCoreModule} from "../core/core.module";
import {SlmLayoutModule} from "../layout/layout.module";
import {SlmRootRootPage} from "./root/root/root.page";
import {SlmNotFoundPage} from "./not-found/not-found.page";
import {SlmRootIndexPage} from "./root/index/root.page";
import {TranslateModule} from "@ngx-translate/core";


const routes: Routes = [
////////////////////////////////////////////////
  // Website Rendering
  ////////////////////////////////////////////////
  {
    path: '',
    redirectTo: environment.defaultLocale + '/home',
    pathMatch: 'full'
  },
  {
    path: ':lang/',
    redirectTo: ':lang/home',
    pathMatch: 'full'
  },

  ////////////////////////////////////////////////
  // Security Routes
  ////////////////////////////////////////////////
  // 404 Route (has to initialized at the end)

  // { path: '**', component: NotFoundPage },
  // { path: ':lang/404', pathMatch: 'full', component: NotFoundPage },
];

@NgModule({
  imports: [
    // slm Modules
    SlmLayoutModule,
    SlmCoreModule.forRoot(),

    // Angular Modules
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    TranslateModule,

    // Third Party Modules
    OrderModule,
    ModalModule
  ],
  declarations: [

    // slm CMS Pages
    SlmRootIndexPage,
    SlmRootRootPage,
    SlmNotFoundPage
  ],
  exports: [
    RouterModule,

    // slm CMS Pages
    SlmRootIndexPage,
    SlmRootRootPage,
    SlmNotFoundPage
  ]
})
export class SlmRouting {

}
