import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumsResponse } from '../models/music/AlbumsResponse';
import { AuthService } from '../../security/services/auth.service';
import { map, catchError, switchMapTo, startWith, mergeAll, mergeMap, concatAll, exhaust, switchAll, concatMap, switchMap, exhaustMap } from 'rxjs/operators';
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
  BehaviorSubject,
  Observable
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
  private errorNotifications = new ReplaySubject<Error>(3, 5_000);
  private albumChanges = new BehaviorSubject<Album[]>([
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
  private queryChanges = new BehaviorSubject<string>('batman');

  constructor(private http: HttpClient) {
    const o: Observable<Album[]> = this.queryChanges
      .pipe(
        switchMap(query => this.requestAlbums(query)),
        // mergeMap(query => this.requestAlbums(query)),
        // concatMap(query => this.requestAlbums(query)),
        // exhaustMap(query => this.requestAlbums(query)),
        // mergeAll(),
        // concatAll(),
        // switchAll(),
        // exhaust(),
        o => o,
        map(res => res.albums.items)
      )


      // .subscribe({
      //   next: albums => this.albumChanges.next(albums),
      //   error: error => this.errorNotifications.next(error)
      // });
  }

  api_url = 'https://api.spotify.com/v1/search';

  private requestAlbums(query: string) {
    return this.http.get<AlbumsResponse>(this.api_url, {
      params: {
        query: query,
        type: 'album'
      } as SearchParams
    });
  }

  // Inputs
  search(query: string) {
    this.queryChanges.next(query);
  }

  // Outputs
  public queries = this.queryChanges.asObservable();

  getAlbums() {
    return this.albumChanges;
  }
}
