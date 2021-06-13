import {Component, Input} from "@angular/core";
import {AbstractControl, FormControl,} from "@angular/forms";

@Component({
  selector: 'slm-textarea',
  templateUrl: './textarea.component.html'
})
export class SlmTextareaComponent {

  @Input()
  label: string | undefined;

  @Input()
  type: string | undefined;

  @Input()
  rows: number = 1;

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
