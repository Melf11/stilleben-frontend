import {ElementInterface} from './element.interface';
import {PageInterface} from './page.interface';
import {FormInterface} from './form.interface';

export interface SectionInterface {
  id: number;
  created_at: string;
  published_at: string;

  title: string;
  description: string;
  position: number;

  pages: Array<PageInterface>;
  elements: Array<ElementInterface>;
  forms: Array<FormInterface>;
}
