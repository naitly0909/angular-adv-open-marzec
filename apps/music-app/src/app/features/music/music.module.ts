import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicSearchComponent } from './containers/music-search/music-search.component';
import { AlbumDetailsComponent } from './containers/album-details/album-details.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TracksListComponent } from './components/tracks-list/tracks-list.component';


@NgModule({
  declarations: [MusicSearchComponent, AlbumDetailsComponent, AlbumCardComponent, SearchFormComponent, SearchResultsComponent, TracksListComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
