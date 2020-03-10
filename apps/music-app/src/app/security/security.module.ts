import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfig } from './services/AuthConfig';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
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
