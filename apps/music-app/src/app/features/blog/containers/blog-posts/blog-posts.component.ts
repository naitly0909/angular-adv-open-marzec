import { Component, OnInit, Inject } from '@angular/core';
import { BlogApiService } from 'apps/music-app/src/app/core/api/blog-api.service';

@Component({
  selector: 'music-apps-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  constructor(
    // @Inject(BlogApiServiceToken)
    private service: BlogApiService
  ) {}

  ngOnInit(): void {}
}
