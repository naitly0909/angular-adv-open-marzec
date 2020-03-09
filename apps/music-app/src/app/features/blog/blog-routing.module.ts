import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsComponent } from './containers/blog-posts/blog-posts.component';
import { SinglePostComponent } from './containers/single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch:'full',
    // pathMatch:'prefix',
    component: BlogPostsComponent,
    children:[]
  },
  {
    path: 'post/:post_id',
    component: SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
