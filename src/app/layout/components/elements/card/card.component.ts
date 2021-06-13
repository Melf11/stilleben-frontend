import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
    selector: 'slm-card, [slm-card]',
    templateUrl: 'card.component.html'
})
export class SlmCardComponent {

    baseClass = 'slm-card';

    @Input()
    state: string | undefined;

    @Input()
    active = false;

    @Input()
    title: string | undefined;

    @Input()
    preTitle: string | undefined;

    @HostBinding('class')
    get hostClasses(): string {
        const bem = new Bem(this.baseClass);
        return bem.setMods(this.baseClass, [
            bem.setModifier(this.state ? this.state : ''),
            bem.checkModifier(this.active, 'active')
        ]);
    }
}
