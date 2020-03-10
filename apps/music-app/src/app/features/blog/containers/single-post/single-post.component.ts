import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../../../../core/api/blog-api.service';
import { Observable } from 'rxjs';
import { Post } from 'apps/music-app/src/app/core/models/Post';
import { FullPost } from '../../../../core/models/Post';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'music-apps-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post?: FullPost;
  openComment = false

  constructor(
    private route: ActivatedRoute, private service: BlogApiService) {}

  ngOnInit(): void {
    const post_id = this.route.snapshot.paramMap.get('post_id');

    if (post_id) {
      this.service.fetchPostById(+post_id)
                  .subscribe(post => {
                    this.post = post;
                  });
    }
  }
}
