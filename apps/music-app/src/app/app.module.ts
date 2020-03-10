import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { BlogModule } from './features/blog/blog.module';
import { UiModule } from './shared/ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SecurityModule } from './security/security.module';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /* Shared */
    UiModule,
    /* Core */
    CoreModule,
    SecurityModule.forRoot(),
    /* Features */
    // BlogModule,
    // MusicModule
    /* App */
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {}
