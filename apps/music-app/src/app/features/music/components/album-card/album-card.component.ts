import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../../core/models/music/Album';

@Component({
  selector: 'music-apps-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() album!: Album;

  constructor() {}

  ngOnInit(): void {}
}
