import { Image } from './Image';
import { Artist } from './Artist';

export interface Album {
  id: string;
  name: string;
  href: string;
  images: Image[];
  artists: Artist[];
}


