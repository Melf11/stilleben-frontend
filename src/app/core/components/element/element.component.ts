import {Component, ElementRef, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ElementInterface} from '../../interfaces/element.interface';
import {Subscription} from 'rxjs';
import {FrontendService} from '../../services/frontend.service';
import {MarkdownService} from 'ngx-markdown';
import {ImageInterface} from '../../interfaces/image.interface';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'slm-element-component',
  templateUrl: 'element.component.html'
})
export class SlmElementComponent implements OnInit, OnDestroy {

  @Input()
  pre: string | undefined;

  @Input()
  element: ElementInterface | undefined;

  subsciption: Subscription = new Subscription();

  _options = environment;

  constructor(
    private elementRef: ElementRef,
    private markdownService: MarkdownService,
    private frontendService: FrontendService
  ) {}

  ngOnInit() {

    if (this.element) {
     this.subsciption = this.frontendService.getElementById(this.element.id).subscribe( element => {
        this.element = element;
      });
    }
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
    this.subsciption = new Subscription();
  }

  getSmallImageUrl(image: ImageInterface): string {
    if (image) {
      if (image.formats.small) {
        return this._options.api + image.formats.small.url;
      } else {
        return this._options.api + image.url;
      }
    }
    return '';
  }


  getMediumImageUrl(image: ImageInterface): string {
    if (image) {
      if (image.formats.medium) {
        return this._options.api + image.formats.medium.url;
      } else {
        return this._options.api + image.url;
      }
    }
    return '';
  }


  getLargeImageUrl(image: ImageInterface): string {
    if (image) {
      if (image.formats.large) {
        return this._options.api + image.formats.large.url;
      } else {
        return this._options.api + image.url;
      }
    }
    return '';
  }


  get markdownRenderer(): string {
    return this.markdownService.compile(this.element ? this.element.content : '');
  }

  getNumberOfString(str: string): number {
    return parseFloat(str);
  }
}
