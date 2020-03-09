import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsComponent } from './containers/blog-posts/blog-posts.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
