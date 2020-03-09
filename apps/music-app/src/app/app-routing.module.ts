import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path:'', component:''
  // },
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
