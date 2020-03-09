import { Component, OnInit, Inject } from '@angular/core';
import { BlogApiService } from 'apps/music-app/src/app/core/api/blog-api.service';
import { Post } from 'apps/music-app/src/app/core/models/Post';

@Component({
  selector: 'music-apps-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    // @Inject(BlogApiServiceToken)
    private service: BlogApiService
  ) {}

  ngOnInit(): void {

    this.service.fetchRecentPosts()
                .subscribe(posts => {
                  this.posts = posts;
                });
  }
}
