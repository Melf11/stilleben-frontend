import {Directive, ElementRef, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';

@Directive({
  selector: '[in-view], in-view'
})
export class InViewDirective {

  private element: ElementRef = new ElementRef({});

  @Output()
  isInView: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(elr: ElementRef) {
    this.element = elr;
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(event: any): void {
    this.isInView.emit(this.isInViewport());
  }

  isInViewport() {
    const rect = this.element.nativeElement.getBoundingClientRect();
    const mid = this.element.nativeElement.offsetTop + this.element.nativeElement.offsetHeight / 2;

    return (
      (
        mid >= window.scrollY && mid <= window.scrollY + window.innerHeight ? true : false
      )
      // || (
      //     rect.top >= 0 &&
      //     rect.left >= 0 &&
      //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      // )
    );
  }
}
