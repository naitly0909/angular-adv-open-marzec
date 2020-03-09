import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../../core/models/Post';

@Component({
  selector: 'music-apps-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input()
  post?: Post;

  @Input()
  mode: 'full' | 'readmore' = 'readmore';

  constructor() {}

  ngOnInit(): void {}
}
