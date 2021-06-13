import {InViewDirective} from "./directives/in-view.directive";
import {LoadingDirective} from "./directives/loading.directive";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {SlmAlertComponent} from "./components/elements/alert/alert.component";
import {SlmButtonComponent} from "./components/elements/button/button.component";
import {SlmImageComponent} from "./components/elements/image/image.component";
import {SlmLoadingComponent} from "./components/elements/loading/loading.component";
import {SlmMapComponent} from "./components/elements/map/map.component";
import {SlmSwitchComponent} from "./components/forms/switch/switch.component";
import {SlmBadgeItemComponent} from "./components/elements/badge-item/badge-item.component";
import {SlmCardComponent} from "./components/elements/card/card.component";
import {SlmCardItemComponent} from "./components/elements/card/card-item/card-item.component";
import {SlmContentComponent} from "./components/elements/content/content.component";
import {SlmContentContentAsideComponent} from "./components/elements/content/content-content-aside/content-content-aside.component";
import {SlmContentContentMainComponent} from "./components/elements/content/content-content-main/content-content-main.component";
import {SlmContentHeaderAsideComponent} from "./components/elements/content/content-header-aside/content-header-aside.component";
import {SlmContentHeaderMainComponent} from "./components/elements/content/content-header-main/content-header-main.component";
import {SlmListComponent} from "./components/elements/list/list.component";
import {SlmListItemComponent} from "./components/elements/list/list-item/list-item.component";
import {SlmListItemListItemComponent} from "./components/elements/list/list-item-list-item/list-item-list-item.component";
import {SlmModalComponent} from "./components/elements/modal/modal.component";
import {SlmFilterListComponent} from "./components/elements/filter-list/filter-list.component";
import {SlmInputComponent} from "./components/forms/input/input.component";
import {SlmTextareaComponent} from "./components/forms/textarea/textarea.component";
import {SlmSelectComponent} from "./components/forms/select/select.component";
import {SlmLayoutComponent} from "./components/layout/layout.component";
import {SlmLayoutAlertsComponent} from "./components/layout/layout-alerts/layout-alerts.component";
import {SlmLayoutContentComponent} from "./components/layout/layout-content/layout-content.component";
import {SlmLayoutFooterComponent} from "./components/layout/layout-footer/layout-footer.component";
import {SlmLayoutHeaderComponent} from "./components/layout/layout-header/layout-header.component";
import {SlmLayoutHeroComponent} from "./components/layout/layout-hero/layout-hero.component";
import {SlmLayoutSidebarComponent} from "./components/layout/layout-sidebar/layout-sidebar.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule} from "@angular/common/http";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {TranslateModule} from "@ngx-translate/core";
import {GoogleMapsModule} from "@angular/google-maps";
import {RfxParallaxModule} from "rfx-parallax";
import {NgxParallaxModule} from "@yoozly/ngx-parallax";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    TranslateModule,
    GoogleMapsModule,
    RfxParallaxModule,
    NgxParallaxModule,
    NgSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    // Directives
    InViewDirective,
    LoadingDirective,

    // Elements
    SlmAlertComponent,
    SlmButtonComponent,
    SlmImageComponent,
    SlmLoadingComponent,
    SlmMapComponent,
    SlmSwitchComponent,
    SlmBadgeItemComponent,
    SlmCardComponent,
    SlmCardItemComponent,

    SlmContentComponent,
    SlmContentContentAsideComponent,
    SlmContentContentMainComponent,
    SlmContentHeaderAsideComponent,
    SlmContentHeaderMainComponent,
    SlmListComponent,
    SlmListItemComponent,
    SlmListItemListItemComponent,
    SlmModalComponent,
    SlmFilterListComponent,

    // Forms
    SlmInputComponent,
    SlmTextareaComponent,
    SlmSelectComponent,

    // slm Layout
    SlmLayoutComponent,
    SlmLayoutAlertsComponent,
    SlmLayoutContentComponent,
    SlmLayoutFooterComponent,
    SlmLayoutHeaderComponent,
    SlmLayoutHeroComponent,
    SlmLayoutSidebarComponent
  ],
  providers: [],
  exports: [
    // Directives
    InViewDirective,
    LoadingDirective,

    // Elements
    SlmAlertComponent,
    SlmButtonComponent,
    SlmImageComponent,
    SlmLoadingComponent,
    SlmMapComponent,
    SlmSwitchComponent,
    SlmBadgeItemComponent,
    SlmCardComponent,
    SlmCardItemComponent,

    SlmContentComponent,
    SlmContentContentAsideComponent,
    SlmContentContentMainComponent,
    SlmContentHeaderAsideComponent,
    SlmContentHeaderMainComponent,
    SlmListComponent,
    SlmListItemComponent,
    SlmListItemListItemComponent,
    SlmModalComponent,
    SlmFilterListComponent,


    // Forms
    SlmInputComponent,
    SlmTextareaComponent,
    SlmSelectComponent,

    // slm Layout
    SlmLayoutComponent,
    SlmLayoutAlertsComponent,
    SlmLayoutContentComponent,
    SlmLayoutFooterComponent,
    SlmLayoutHeaderComponent,
    SlmLayoutHeroComponent,
    SlmLayoutSidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlmLayoutModule {
}
