import { Injectable } from '@angular/core';
import { Post } from '../../../core/models/Post';
import { BlogApiService } from '../../../core/api/blog-api.service';

@Injectable()
export class BlogPostService {
  sendComment(value:string) {
    this.api.postComment({
      postId:this.post!.id,
      body: value
    })
  }
  private post: Post | undefined;

  like() {
    this.api.postPostLike(this.post?.id);
  }

  setPost(post: Post | undefined) {
    this.post = post;
  }

  constructor(private api: BlogApiService) {
    // console.log('hello BlogPostService');
  }

  ngOnDestroy(): void {
    // console.log('bye bye BlogPostService');
  }
}
