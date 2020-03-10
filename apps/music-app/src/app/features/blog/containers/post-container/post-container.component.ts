import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'apps/music-app/src/app/core/models/Post';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'music-apps-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
  providers: [BlogPostService]
})
export class PostContainerComponent implements OnInit {
  @Input() post!: Post;

  currentPost?: Post;

  ngOnChanges() {
    this.blogModel.setPost(this.post);
  }

  constructor(public blogModel: BlogPostService) {
    this.blogModel.postChanges.subscribe((post) => {
      this.currentPost = post as Post;
    });
  }

  ngOnInit(): void {}

  like() {
    this.blogModel.like();
  }
  unlikePost() {
    this.blogModel.unlikePost();
  }

  commentBoxOpen = false;

  openCommentBox() {
    this.commentBoxOpen = true;
  }
}
