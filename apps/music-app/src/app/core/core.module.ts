import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL } from './api/blog-api.service';
import { environment } from '../../environments/environment';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../shared/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api.url
    }
  ]
})
export class CoreModule {}
