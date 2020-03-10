import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Post, FullPost } from '../models/Post';
import { Observable, of } from 'rxjs';

// https://jsonplaceholder.typicode.com/posts/?_expand=user&_embed=comments
import fixture from '../fixtures/full-posts-list.json';
import { HttpClient } from '@angular/common/http';
import { PostComment } from '../models/PostComment';

export const API_URL = new InjectionToken<string>('Blog API Token');

interface CreateCommentPayload {
  postId: number;
  body: string;
  name: string;
}

@Injectable({
  // providedIn: BlogModule,
  providedIn: 'root'
})
export class BlogApiService {
  constructor(
    @Inject(API_URL) private api_url: string,
    private http: HttpClient
  ) {}

  fetchRecentPosts(): Observable<Post[]> {
    const req = this.http.get<Post[]>(this.api_url + 'posts', {
      params: { _limit: '10' }
    });

    // const sub = req.subscribe(console.log)
    // sub.unsubscribe()

    return req;
  }

  fetchPostById(id: number): Observable<FullPost> {
    return this.http.get<FullPost>(this.api_url + 'posts/' + id, {
      params: {
        _expand: 'user',
        _embed: 'comments'
      }
    });
  }

  postComment(comment: CreateCommentPayload) {
    console.log(comment);

    return this.http.post(this.api_url + 'comments', comment, {});
  }

  fetchPostCommentsById(id: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(
      this.api_url + 'posts/' + id + '/comments'
    );
  }

  postPostLike(id: any, value: boolean) {
    return this.http.patch<Post>(this.api_url + 'posts/' + id, {
      likes: value ? 1 : -1
    });
  }
}
