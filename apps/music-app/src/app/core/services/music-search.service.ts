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
  constructor(private auth: AuthService, private http: HttpClient) {}

  api_url = 'https://api.spotify.com/v1/search';

  search(q: string) {
    return this.http
      .get<AlbumsResponse>(this.api_url, {
        params: {
          query: q,
          type: 'album'
        } as SearchParams,
        headers: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      })
      .pipe(
        map(res => res.albums.items),
        // https://www.learnrxjs.io/learn-rxjs/operators/error_handling/
        catchError((error, caught) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status == 401) {
              this.auth.authorize();
            }
            return throwError(error.error.error.message);
          }
          // return []
          // return EMPTY
          // return NEVER
          return throwError(error.message);
        })
      );
  }
}
