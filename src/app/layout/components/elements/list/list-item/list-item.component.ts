import {Component, Input} from '@angular/core';
import {Animations} from "../../../../utils/animations";

@Component({
    selector: 'slm-list-item, [slm-list-item]',
    templateUrl: 'list-item.component.html',
    animations: [
        Animations.fadeInOut
    ]
})
export class SlmListItemComponent {

    @Input()
    text: string | undefined;

    @Input()
    textRight: string | undefined;

    @Input()
    state: string | undefined;

    @Input()
    badge: { text: string, state: string | undefined} | undefined;

    @Input()
    active = false;

    @Input()
    loading = false;
}
