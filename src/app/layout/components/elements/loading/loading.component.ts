import {Component, ElementRef, Input} from '@angular/core';
import {Animations} from "../../../utils/animations";

@Component({
    selector: 'slm-loading',
    templateUrl: 'loading.component.html',
    animations: [
      Animations.fadeInOut
    ]
})
export class SlmLoadingComponent {

    @Input()
    isLoading = true;

    @Input()
    overlay = false;

    @Input()
    text = 'global.loading';

    // public ElementRef is needed for LoadingDirective
    constructor(public elementRef: ElementRef) {
    }
}
