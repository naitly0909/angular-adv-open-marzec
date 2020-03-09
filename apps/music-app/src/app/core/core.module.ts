import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_URL } from './api/blog-api.service';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api.url
    }
  ]
})
export class CoreModule {}
