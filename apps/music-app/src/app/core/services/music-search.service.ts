import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumsResponse } from '../models/music/AlbumsResponse';
import { AuthService } from '../../security/services/auth.service';
import { map, catchError, switchMapTo, startWith } from 'rxjs/operators';
import {
  throwError,
  EMPTY,
  NEVER,
  timer,
  of,
  Subject,
  merge,
  concat,
  ReplaySubject,
  BehaviorSubject
} from 'rxjs';
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
  errorNotifications = new ReplaySubject<Error>(3, 5_000);
  albumChanges = new BehaviorSubject<Album[]>([
    {
      id: '123',
      href: '123',
      name: 'Placki',
      artists: [],
      images: [
        {
          url: 'https://www.placecage.com/c/200/300',
          height: 300,
          width: 300
        }
      ]
    }
  ]);

  albums: Album[] = [];

  getAlbums() {
    // return merge( this.albumChanges.asObservable(), of(this.albums));
    // return concat( of(this.albums),  this.albumChanges.asObservable());
    // return this.albumChanges.pipe(startWith(this.albums));
    return this.albumChanges; //.pipe(startWith(this.albums));

    // return of([]);
  }
}
