import {SectionInterface} from './section.interface';
import {ImageInterface} from './image.interface';
import {FormInterface} from './form.interface';
import {CardInterface} from './card.interface';

export interface MapDataInterface {
  id: number;
  longitude: string;
  latitude: string;
  api_key: string;
  marker_text: string;
}

export interface ElementInterface {
  id: number;
  created_at: string;
  published_at: string;
  updated_at: string;
  title: string;
  content: string;
  position: number;
  image: ImageInterface;
  sections: Array<SectionInterface>;
  offers: Array<CardInterface>;
  is_single_page_element: boolean;
  is_highlighted: boolean;
  map_data: MapDataInterface;
  forms: Array<FormInterface>;
}
