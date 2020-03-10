import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogPostsComponent } from './views/blog-posts/blog-posts.component';
import { UiModule } from '../../shared/ui/ui.module';
import { CommentsComponent } from './components/comments/comments.component';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { PostContainerComponent } from './containers/post-container/post-container.component';

@NgModule({
  declarations: [
    BlogPostComponent,
    BlogPostsComponent,
    CommentsComponent,
    SinglePostComponent,
    CommentFormComponent,
    PostContainerComponent
  ],
  imports: [BlogRoutingModule, CommonModule, BlogRoutingModule, UiModule],
  providers: [
    // {
    //   provide: API_URL,
    //   useValue: environment.api.url
    // }
    // {
    //   provide: BlogApiService,
    //   useFactory(url: string /* a,b,c,d */) {
    //     return new BlogApiService(url);
    //   },
    //   deps: [API_URL /* , B, C, D... */]
    // },
    // {
    //   provide: BlogApiService,
    //   useClass: MockBlogApiService,
    //   // deps: [MOCK_API_URL]
    // },
    // BlogApiService
  ]
})
export class BlogModule {}
