import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'music-apps-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm = this._fb.group({
    // query: new FormControl('batman',[],[])
    query: ['batman', [], []],
    type: ['album']
  });

  @Output() search = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {
    const values = this.searchForm.get('query')!.valueChanges;

    const validValues = values.pipe(
      debounceTime(400),
      filter(q => q.length >= 3),
      distinctUntilChanged()
    );

    validValues.subscribe(q => this.search.emit(q));
  }

  ngOnInit(): void {}

  submit() {
    this.search.emit(this.searchForm.get('query')!.value);
  }
}
