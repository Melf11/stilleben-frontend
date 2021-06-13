import {Component, Input, Output, EventEmitter} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'slm-select',
  templateUrl: './select.component.html'
})
export class SlmSelectComponent {

  @Input()
  label: string | undefined;

  @Input()
  id: string | undefined;

  @Input()
  help: string | undefined;

  @Input()
  placeholder: string | undefined;

  @Input()
  required: boolean = false;

  @Input()
  searchable: boolean = true;

  @Input()
  multiple: boolean = false;

  @Input()
  clearable: boolean = false;

  @Input()
  control: FormControl | AbstractControl | null = null;

  @Input()
  options: Array<{label: string, value: string}> | null = null
  //
  // optionSelected: {label: string, value: string};
  //
  // @Input()
  // get option() {
  //   return this.optionSelected;
  // }
  //
  // @Output() optionChange = new EventEmitter();
  //
  // set option(val) {
  //   console.log(val);
  //   if (typeof val === 'string') {
  //     this.optionSelected = this.options.find(_ => _.value === val);
  //   } else {
  //     this.optionSelected = val;
  //   }
  //   this.optionChange.emit(this.optionSelected);
  // }

  getFormControl(abstractControl: AbstractControl | null): FormControl {
    return abstractControl as FormControl;
  }
}
