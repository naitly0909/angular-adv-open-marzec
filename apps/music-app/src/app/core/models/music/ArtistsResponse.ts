import { Artist } from './Artist';
import { PagingObject } from './PagingObject';
export interface ArtistsResponse {
  artists: PagingObject<Artist>;
}
