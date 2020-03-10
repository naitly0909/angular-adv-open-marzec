import { Injectable, EventEmitter } from '@angular/core';
import { Post, FullPost } from '../../../core/models/Post';
import { BlogApiService } from '../../../core/api/blog-api.service';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable()
export class BlogPostService {
  // private post: Post | undefined;
  // postChanges = new EventEmitter<Post>()
  // postChanges = new Subject<Post>()
  // postChanges = new ReplaySubject<Post>(1,2000)

  postChanges = new BehaviorSubject<FullPost | null>(null);

  sendComment(value: string) {
    this.api
      .postComment({
        postId: this.postChanges.getValue()!.id,
        body: value,
        name: 'Anonymous'
      })
      .subscribe({
        next: resp => this.reloadComments(),
        error: err => {
          console.log(err);
        },
        complete: () => {}
      });
  }

  reloadComments(): void {
    const post = this.postChanges.getValue()!;

    this.api.fetchPostCommentsById(post!.id).subscribe(comments => {
      this.postChanges.next({
        ...post,
        comments
      });
    });
  }

  reloadPost(): void {
    this.api.fetchPostById(this.postChanges.getValue()!.id).subscribe({
      next: post => {
        this.postChanges.next(post);
      }
    });
  }

  unlikePost() {
    this.api
      .postPostLike(this.postChanges.getValue()!.id, false)
      .subscribe(post => {
        this.reloadPost();
      });
  }

  like() {
    this.api
      .postPostLike(this.postChanges.getValue()!.id, true)
      .subscribe(post => this.reloadPost());
  }

  setPost(post: Post) {
    this.postChanges.next(post as FullPost);
  }

  constructor(private api: BlogApiService) {}

  ngOnDestroy(): void {}
}
