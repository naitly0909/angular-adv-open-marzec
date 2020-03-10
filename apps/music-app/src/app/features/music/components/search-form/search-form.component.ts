import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'music-apps-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitSearch(q: string) {
    this.search.emit(q);
  }
}
