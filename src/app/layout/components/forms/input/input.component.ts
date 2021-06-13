import {Component, Input} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'slm-input',
  templateUrl: './input.component.html'
})
export class SlmInputComponent {

  @Input()
  label: string | undefined;

  @Input()
  type: string | undefined;

  @Input()
  id: string | undefined;

  @Input()
  help: string | undefined;

  @Input()
  placeholder: string | undefined;

  @Input()
  required: boolean = false;

  @Input()
  control: FormControl | AbstractControl | null = null;

  getFormControl(abstractControl: AbstractControl | null): FormControl {
    return abstractControl as FormControl;
  }
}
