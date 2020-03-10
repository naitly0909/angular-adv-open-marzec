import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PostComment } from '../../../../core/models/PostComment';

@Component({
  selector: 'music-apps-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {

  ngDoCheck(): void {
    console.log('check CommentsComponent')
  }

  @Input() comments: PostComment[] = []

  constructor() {}

  ngOnInit(): void {}
}
