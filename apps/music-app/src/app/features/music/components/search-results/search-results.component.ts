import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'apps/music-app/src/app/core/models/music/Album';

@Component({
  selector: 'music-apps-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() results: Album[] = []

  constructor() {}

  ngOnInit(): void {}
}
