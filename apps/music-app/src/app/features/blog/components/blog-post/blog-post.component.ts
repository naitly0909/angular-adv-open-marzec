import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../../../core/models/Post';

export interface StartCommentEvent {}

@Component({
  selector: 'music-apps-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input()
  post?: Post;

  @Output() startComment = new EventEmitter<StartCommentEvent>();

  @Input()
  mode: 'full' | 'readmore' = 'readmore';

  constructor() {}

  ngOnInit(): void {}

  createComment() {
    this.startComment.emit();
  }
}
