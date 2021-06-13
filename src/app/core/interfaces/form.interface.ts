
export interface FormFieldInterface {
  title: string;
  entity: string;
  placeholder: string;
  helpText: string;
  type: string;
  is_required: boolean;
}

export interface FormInterface {
  id: number;
  created_at: string;
  published_at: string;
  updated_at: string;
  title: string;
  form_fields:  Array<FormFieldInterface>;
  submit_button_text: string;
  cancel_button_text: string;
  is_single_page_element: boolean;
  is_small_form: boolean;
  content: string;
  success_message: string;
  error_message: string;
}
