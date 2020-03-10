import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../core/models/music/Album';

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

  constructor() {}

  ngOnInit(): void {}

  search(query: string) {
    console.log(query);
  }
}
