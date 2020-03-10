import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicSearchComponent } from './containers/music-search/music-search.component';
import { AlbumDetailsComponent } from './containers/album-details/album-details.component';

const routes: Routes = [
  {
    path: '',
    component: MusicSearchComponent
  },
  {
    path: 'album/:album_id',
    component: AlbumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
