import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../core/models/music/Album';
import { MusicSearchService } from 'apps/music-app/src/app/core/services/music-search.service';
import { HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'music-apps-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {
  results: Album[] = [];
  message = '';
  query = '';

  constructor(private service: MusicSearchService) {}

  ngOnInit(): void {
    this.sub1 = this.service.queries.subscribe(query => {
      this.query = query;
    });

    this.sub2 = this.service
      .getAlbums()
      // .pipe(tap(console.log))
      .subscribe({
        next: results => (this.results = results),
        error: error => (this.message = error.message)
      });
  }

  search(query: string) {
    this.service.search(query);
  }

  sub1!:Subscription
  sub2!:Subscription

  ngOnDestroy(){
    this.sub1.unsubscribe()
    this.sub2.unsubscribe()
  }
}
