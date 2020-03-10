import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges,
  ViewEncapsulation,
  DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';
import { Post } from '../../../../core/models/Post';
import { BlogPostService } from '../../services/blog-post.service';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';

export interface StartCommentEvent {}

@Component({
  selector: 'music-apps-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('check BlogPostComponent')
  }

  @Input()
  post!: Post;

  @Input()
  mode: 'full' | 'readmore' = 'readmore';

  @Output() startComment = new EventEmitter<StartCommentEvent>();
  @Output() like = new EventEmitter<StartCommentEvent>();

  likePost() {
    this.like.emit();
  }

  createComment() {
    this.startComment.emit();
  }
}
