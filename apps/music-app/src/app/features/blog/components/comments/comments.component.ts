import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from '../../../../core/models/PostComment';

@Component({
  selector: 'music-apps-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: PostComment[] = []

  constructor() {}

  ngOnInit(): void {}
}
