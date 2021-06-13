import {Component, Input} from '@angular/core';

@Component({
    selector: 'slm-list-item-list-item, [slm-list-item-list-item]',
    templateUrl: 'list-item-list-item.component.html'
})
export class SlmListItemListItemComponent {

    @Input()
    text: string | undefined;

}
