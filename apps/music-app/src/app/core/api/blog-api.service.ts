import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Post } from '../models/Post';
import { Observable, of } from 'rxjs';

// https://jsonplaceholder.typicode.com/posts/?_expand=user&_embed=comments
import fixture from '../fixtures/full-posts-list.json';

export const API_URL = new InjectionToken<string>('Blog API Token');

@Injectable({
  // providedIn: BlogModule,
  providedIn: 'root'
})
export class BlogApiService {
  constructor(@Inject(API_URL) private api_url: string) {}

  fetchRecentPosts(): Observable<Post[]> {
    return of((fixture as unknown) as Post[]);
  }
}
