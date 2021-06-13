import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
    selector: 'slm-badge-item, [slm-badge-item]',
    templateUrl: 'badge-item.component.html'
})
export class SlmBadgeItemComponent {

    baseClass = 'slm-badge-item';

    @Input()
    state: string | undefined;

    @Input()
    active = false;

    @Input()
    text: string | undefined;

    @Input()
    textRight: string | undefined;

    @Input()
    loading = false;

    @HostBinding('class')
    get hostClasses(): string {
        const bem = new Bem(this.baseClass);
        return bem.setMods(this.baseClass, [
            bem.setModifier(this.state ? this.state : ''),
            bem.checkModifier(this.loading, 'loading'),
            bem.checkModifier(this.active, 'active')
        ]);
    }
}
