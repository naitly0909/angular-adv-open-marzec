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
  results$ = this.service.getAlbums();
  query$ = this.service.queries;
  message = '';

  constructor(private service: MusicSearchService) {}

  ngOnInit(): void {}

  search(query: string) {
    this.service.search(query);
  }
}
