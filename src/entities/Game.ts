import { Genre } from './Genre';
import { Platform } from './Platform';

export interface Game {
    id: number;
    name: string;
    slug: string;
    genres : Genre[];
    background_image: string;
    description_raw: string;
    parent_platforms: { platform: Platform; }[];
}
