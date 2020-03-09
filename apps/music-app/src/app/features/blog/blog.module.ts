import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostsComponent } from './containers/blog-posts/blog-posts.component';


@NgModule({
  declarations: [
     BlogPostComponent,
     BlogPostsComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
