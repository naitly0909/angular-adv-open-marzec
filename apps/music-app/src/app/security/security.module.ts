import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfig } from './services/AuthConfig';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthInterceptorService,
      multi:true
    }
  ]
})
export class SecurityModule {
  static forRoot(config: AuthConfig = new AuthConfig()): ModuleWithProviders {
    ///*  */
    return {
      ngModule: SecurityModule,
      providers: [
        {
          provide: AuthConfig,
          useValue: config
        }
      ]
    };
  }

  constructor(private auth: AuthService) {}
}
