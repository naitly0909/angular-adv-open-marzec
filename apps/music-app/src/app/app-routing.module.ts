import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { TodosModule } from './features/todos/todos.module';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'todos',
        loadChildren: () =>
          import('./features/todos/todos.module').then(f => f.TodosModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./features/blog/blog.module').then(f => f.BlogModule)
      },
      {
        path: 'music',
        loadChildren: () =>
          import('./features/music/music.module').then(f => f.MusicModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true
    })
  ],
  // providers: [
  //   {
  //     provide: ROUTES,
  //     useValue: routes,
  //     multi:true
  //   }
  // ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
