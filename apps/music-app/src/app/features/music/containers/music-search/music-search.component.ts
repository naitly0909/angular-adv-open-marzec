import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../core/models/music/Album';
import { MusicSearchService } from 'apps/music-app/src/app/core/services/music-search.service';
import { HttpErrorResponse } from '@angular/common/http';
import {
  tap,
  takeUntil,
  multicast,
  refCount,
  share,
  shareReplay
} from 'rxjs/operators';
import {
  Subscription,
  Subject,
  ConnectableObservable,
  ReplaySubject
} from 'rxjs';

@Component({
  selector: 'music-apps-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {
  query$ = this.service.queries;
  message = '';

  results$ = this.service.getAlbums().asObservable() //.pipe(shareReplay());

  constructor(private service: MusicSearchService) {}

  ngOnInit(): void {}

  connect() {
    this.results$ = this.service.getAlbums().pipe(tap(console.log)) //.pipe(shareReplay());
  }

  search(query: string) {
    this.service.search(query);
  }
}
