import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL } from './api/blog-api.service';
import { environment } from '../../environments/environment';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api.url
    }
  ]
})
export class CoreModule {}
