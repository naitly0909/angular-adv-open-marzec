import { Image } from './Image';
import { External_url } from "./External_url";
export interface Artist {
  external_urls: External_url;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
