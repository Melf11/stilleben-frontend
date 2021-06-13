import {Component, HostBinding, Inject, Input, OnInit} from '@angular/core';
import {MarkdownService} from 'ngx-markdown';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormInterface} from '../../interfaces/form.interface';
import {FORM_TYPES} from "../../../layout/declarations/form.types";
import {Animations} from "../../../layout/utils/animations";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'slm-form-component',
  templateUrl: 'form.component.html',
  animations: [
    Animations.fadeInOut,
    Animations.fadeHeightInOut
  ]
})
export class SlmFormComponent implements OnInit {

  formTypes = FORM_TYPES;

  @Input()
  form: FormInterface | undefined;

  formGroup: FormGroup = new FormGroup({});

  @HostBinding('class') class = 'slm-form';

  formSuccess = false;
  formError = false;
  formErrorMessage: HttpErrorResponse | undefined;

  requestPending = false;

  _options = environment;

  constructor(
    private markdownService: MarkdownService,
    private _api: HttpClient
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  submitForm(event: any) {
    this.requestPending = true;
    this._api.post(this._options.api + '/contact-requests', this.formGroup.getRawValue()).subscribe(_ => {
      if (_) {
        this.formSuccess = true;
        this.formError = false;
      } else {
        this.formError = true;
        this.formSuccess = false;
      }
      this.requestPending = false;
    }, error => {
        this.formErrorMessage = error;
        this.formError = true;
        this.formSuccess = false;
        this.requestPending = false;
    });
  }

  buildForm() {
    this.formGroup = new FormGroup({});
    this.form?.form_fields?.forEach(field => {
      if (field.title) {
        switch (field.type) {
          case FORM_TYPES.INPUT:
            this.formGroup.addControl(field.entity, new FormControl(''));
            break;
          case FORM_TYPES.CHECKBOX:
            this.formGroup.addControl(field.entity, new FormControl(false));
            break;
          case FORM_TYPES.SWITCH:
            this.formGroup.addControl(field.entity, new FormControl(false));
            break;
          case FORM_TYPES.EMAIL:
            this.formGroup.addControl(field.entity, new FormControl('', [Validators.email]));
            break;
          case FORM_TYPES.PASSWORD:
            this.formGroup.addControl(field.entity, new FormControl(''));
            break;
          case FORM_TYPES.TEXTFIELD:
            this.formGroup.addControl(field.entity, new FormControl(''));
            break;
          default:
            break;
        }
      }
      if (field.is_required) {
        this.formGroup.get(field.entity)?.setValidators([Validators.required]);
      }
    });
  }

  clearForm() {
    this.buildForm();
    this.formError = false;
    this.formSuccess = false;
  }

  get markdownRenderer(): string {
    return this.markdownService.compile(this.form ? this.form.content : '');
  }

  getMarkdownFrom(element: string) {
    return this.markdownService.compile(element);
  }

  getIdFromTitle(str: string): string {
    return str.replace(/\s/g, '').toLowerCase();
  }
}
