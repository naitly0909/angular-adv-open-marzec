import { PagingObject } from './PagingObject';
import { Album } from './Album';
export interface AlbumsResponse {
  albums: PagingObject<Album>;
}
