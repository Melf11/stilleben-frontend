import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {Bem} from "../../../utils/bem";

@Component({
  selector: 'slm-switch',
  templateUrl: 'switch.component.html'
})
export class SlmSwitchComponent implements OnInit {

  @Input()
  id: string | undefined;

  @Input()
  checked = true;

  @Input()
  size = '';

  @Input()
  control: FormControl | AbstractControl | null = null;

  @Input()
  switchState = true;

  @Output()
  switched: EventEmitter<any> = new EventEmitter<any>();


  baseClass = 'switch';

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);

    return bem.setMods(this.baseClass, [
      bem.setModifier(this.size!),
    ]);
  }

  ngOnInit(): void {
    this.switched.emit(this.switchState);
  }

  getFormControl(abstractControl: AbstractControl | null): FormControl {
    return abstractControl as FormControl;
  }
}
