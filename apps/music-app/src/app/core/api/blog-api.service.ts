import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Post, FullPost } from '../models/Post';
import { Observable, of } from 'rxjs';

// https://jsonplaceholder.typicode.com/posts/?_expand=user&_embed=comments
import fixture from '../fixtures/full-posts-list.json';

export const API_URL = new InjectionToken<string>('Blog API Token');

interface CreateCommentPayload {
  postId: number;
  body: string;
}

@Injectable({
  // providedIn: BlogModule,
  providedIn: 'root'
})
export class BlogApiService {
  postComment(comment: CreateCommentPayload) {
    debugger
    throw new Error("Method not implemented.");
  }
  postPostLike(id: any) {
    debugger
    throw new Error("Method not implemented.");
  }
  constructor(@Inject(API_URL) private api_url: string) {}

  fetchRecentPosts(): Observable<Post[]> {
    return of((fixture as unknown) as Post[]);
  }

  fetchPostById(id: number): Observable<FullPost|undefined> {
    return of(
      //
      ((fixture as unknown) as FullPost[]) //
        .find(p => p.id == id)
    );
  }
}
