import {Component, Input} from '@angular/core';

@Component({
    selector: 'slm-card-item, [slm-card-item]',
    templateUrl: 'card-item.component.html'
})
export class SlmCardItemComponent {

    @Input()
    leftText: string | undefined;

    @Input()
    rightText: string | undefined;

    @Input()
    state: string | undefined;
}
