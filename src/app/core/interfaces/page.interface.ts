import {SectionInterface} from './section.interface';
import {ImageInterface} from './image.interface';

export interface PageInterface {
  id: number;
  created_at: string;
  published_at: string;
  updated_at: string;

  title: string;
  description: string;

  navigation: string;
  hide: boolean;

  hero_background: ImageInterface;
  hero_text: string;

  sections: Array<SectionInterface>;
}
