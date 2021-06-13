import {ImageInterface} from './image.interface';

export interface CardInterface {
    id: number;
    created_at: string;
    published_at: string;
    updated_at: string;
    title: string;
    content: string;
    position: number;
    image: ImageInterface;
    start_date: string;
    end_date: string;
    short_description: string;
    description: string;
}
