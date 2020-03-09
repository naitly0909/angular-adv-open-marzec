import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostsComponent } from './containers/blog-posts/blog-posts.component';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../core/api/blog-api.service';

@NgModule({
  declarations: [BlogPostComponent, BlogPostsComponent],
  imports: [BlogRoutingModule, CommonModule, BlogRoutingModule],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api.url
    }
  ]
})
export class BlogModule {}
