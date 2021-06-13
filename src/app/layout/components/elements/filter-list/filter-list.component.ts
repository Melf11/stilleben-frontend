import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'slm-filter-list',
    templateUrl: 'filter-list.component.html'
})
export class SlmFilterListComponent {

    @Input()
    title: string | undefined;

    @Input()
    isLoading = false;

    @Input()
    tableHeaders: Array<{ label: string, value: string }> | null = null

    @Input()
    items: Array<{
        id: string | number,
        inactive: boolean,
        elements: Array<string>,
        actions: Array<{ label: string, value: string, icon: string }>
    }> | null = null

    @Output()
    actionClicked: EventEmitter<{ id: string | number, action: string }> = new EventEmitter<{id: string | number; action: string}>()
}
