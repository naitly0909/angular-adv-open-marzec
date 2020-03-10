import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsResponse } from '../models/music/AlbumsResponse';
import { AuthService } from '../../security/services/auth.service';

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
    return this.http.get<AlbumsResponse>(this.api_url, {
      params: {
        query: q,
        type: 'album'
      } as SearchParams,
      headers: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
  }
}
