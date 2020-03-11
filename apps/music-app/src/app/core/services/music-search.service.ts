import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumsResponse } from '../models/music/AlbumsResponse';
import { AuthService } from '../../security/services/auth.service';
import { map, catchError, switchMapTo } from 'rxjs/operators';
import { throwError, EMPTY, NEVER, timer, of, Subject } from 'rxjs';
import { Album } from '../models/music/Album';

type SearchParams = {
  query: string;
  type: 'album';
};

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {
  constructor(private http: HttpClient) {}

  api_url = 'https://api.spotify.com/v1/search';

  search(query: string) {
    this.http
      .get<AlbumsResponse>(this.api_url, {
        params: {
          query: query,
          type: 'album'
        } as SearchParams
      })
      .pipe(map(res => res.albums.items))
      .subscribe({
        next: albums => this.albumChanges.next(albums),
        error: error => this.errorNotifications.next(error)
      });
  }
  errorNotifications = new Subject<Error>();
  albumChanges = new Subject<Album[]>();

  getAlbums() {
    return this.albumChanges.asObservable();
    // return of([]);
  }
}
