import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
    selector: 'slm-button, slm-btn, [slm-button], [slm-btn]',
    templateUrl: 'button.component.html'
})
export class SlmButtonComponent {

    baseClass = 'btn';

    @Input('loading') public loading = false;
    @Input('size') size: string | undefined = undefined;
    @Input('color') color: string | undefined = undefined;
    @Input('type') type: string | undefined = undefined;
    @Input('block') block: boolean = false;
    @Input('outline') outline: boolean = false;
    @Input('inline') inline: boolean = false;
    @Input('disabled') disabled: boolean = false;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.size!),
            bem.setModifier(this.color!),
            bem.setModifier(this.type!),
            bem.checkModifier(this.outline, 'outline'),
            bem.checkModifier(this.inline, 'inline'),
            bem.checkModifier(this.block, 'block'),
            bem.checkModifier(this.loading, 'loading'),
            bem.checkModifier(this.disabled, 'disabled'),
        ]);
    }

    constructor() {

    }
}
