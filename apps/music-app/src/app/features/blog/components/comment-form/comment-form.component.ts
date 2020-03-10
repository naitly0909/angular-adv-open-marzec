import { Component, OnInit, Optional } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'music-apps-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  constructor(
    private postService: BlogPostService,
    @Optional() private postComponent: BlogPostComponent
  ) {}

  ngOnInit(): void {}

  sendComment(value: string) {
    this.postService.sendComment(value);
  }
}
