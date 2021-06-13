import {Component, Input} from '@angular/core';

@Component({
    selector: 'slm-list, [slm-list]',
    templateUrl: 'list.component.html'
})
export class SlmListComponent {

    @Input()
    title: string | undefined;

    @Input()
    type: string | undefined;

    @Input()
    hasBadges = false;

}
