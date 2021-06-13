import { Component } from '@angular/core';

@Component({
    selector: 'slm-not-found-page',
    templateUrl: 'not-found.page.html'
})
export class SlmNotFoundPage {
    currentPath = window.location.href;
}
