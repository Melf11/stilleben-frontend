import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Animations} from "../../../utils/animations";

@Component({
    selector: 'slm-modal, [slm-modal]',
    templateUrl: 'modal.component.html',
    animations: [
        Animations.fadeInOut
    ]
})
export class SlmModalComponent {

    @Input()
    active = false;

    @Input()
    title: string | undefined;

    @Input()
    state: string | undefined;

    @Output()
    isShown: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener('document:keydown.escape')
    closeModalByEscape() {
        this.closeModal();
    }

    closeModal() {
        this.isShown.emit(false);
        this.active = false;
    }
}
