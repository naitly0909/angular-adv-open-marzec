import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../core/models/music/Album';
import { MusicSearchService } from 'apps/music-app/src/app/core/services/music-search.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'music-apps-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {
  results: Album[] = [
    {
      id: '123',
      href: '123',
      name: 'Placki',
      artists: [],
      images: [
        {
          url: 'https://www.placecage.com/c/200/300',
          height: 300,
          width: 300
        }
      ]
    }
  ];
  message = '';

  constructor(private service: MusicSearchService) {}

  ngOnInit(): void {
    this.search('batman');
  }

  search(query: string) {
    console.log(query);

    this.service.search(query).subscribe({
      next: results => (this.results = results),
      error: error => (this.message = error.message)
    });
  }
}
