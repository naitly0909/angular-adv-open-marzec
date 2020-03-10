import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges
} from '@angular/core';
import { Post } from '../../../../core/models/Post';
import { BlogPostService } from '../../services/blog-post.service';

export interface StartCommentEvent {}

@Component({
  selector: 'music-apps-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  // viewProviders: [BlogPostService]
  providers: [BlogPostService]
})
export class BlogPostComponent implements OnChanges{
  @Input()
  post!: Post;

  @Output() startComment = new EventEmitter<StartCommentEvent>();

  @Input()
  mode: 'full' | 'readmore' = 'readmore';

  constructor(private postService: BlogPostService) {}

  ngOnChanges(): void {
    this.postService.setPost(this.post);
  }

  likePost() {
    this.postService.like();
  }

  createComment() {
    this.startComment.emit();
  }
}
