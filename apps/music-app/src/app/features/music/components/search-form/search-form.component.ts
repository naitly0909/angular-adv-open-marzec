import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import {
  filter,
  distinctUntilChanged,
  debounceTime,
  tap
} from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'music-apps-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm = this._fb.group({
    // query: new FormControl('batman',[],[])
    query: ['batman', [Validators.required, Validators.minLength(3)], []],
    type: ['album']
  });

  @Output() search = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {
    const values = this.searchForm.get('query')!.valueChanges;

    const validValues = values.pipe(
      // tap(value => {
      //   console.log(value, this.searchForm.valid)
      // }),
      // filter(() => this.searchForm.valid),
      debounceTime(400),
      filter(q => q.length >= 3),
      distinctUntilChanged()
    );

    validValues.subscribe(q => this.search.emit(q));
  }

  ngOnInit(): void {}

  submit() {
    this.searchForm.markAllAsTouched();
    this.search.emit(this.searchForm.get('query')!.value);
  }

  matcher = new MyErrorStateMatcher();
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
