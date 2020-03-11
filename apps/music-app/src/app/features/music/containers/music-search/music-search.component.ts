import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../core/models/music/Album';
import { MusicSearchService } from 'apps/music-app/src/app/core/services/music-search.service';
import { HttpErrorResponse } from '@angular/common/http';
import { tap, takeUntil } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';

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
    this.service.queries
      .pipe(takeUntil(this.destroySignal))
      .subscribe(query => {
        this.query = query;
      });

    this.service
      .getAlbums()
      .pipe(takeUntil(this.destroySignal))
      .subscribe({
        next: results => (this.results = results),
        error: error => (this.message = error.message)
      });
  }

  search(query: string) {
    this.service.search(query);
  }

  destroySignal = new Subject();

  ngOnDestroy() {
    this.destroySignal.next();
  }
}
