import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumsResponse } from '../models/music/AlbumsResponse';
import { AuthService } from '../../security/services/auth.service';
import { map, catchError, switchMapTo } from 'rxjs/operators';
import { throwError, EMPTY, NEVER, timer } from 'rxjs';

type SearchParams = {
  query: string;
  type: 'album';
};

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {
  constructor( private http: HttpClient) {}

  api_url = 'https://api.spotify.com/v1/search';

  search(q: string) {
    return this.http
      .get<AlbumsResponse>(this.api_url, {
        params: {
          query: q,
          type: 'album'
        } as SearchParams,
      })
      .pipe(
        map(res => res.albums.items)
      )
  }
}
