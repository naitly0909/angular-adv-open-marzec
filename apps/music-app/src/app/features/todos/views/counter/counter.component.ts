import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'apps/music-app/src/app/reducers';
import { Increment, Decrement } from '../../../../counter.reducer';

@Component({
  selector: 'music-apps-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  // counter = this.store.select(s => s.counter.value);
  counter = this.store.select('counter', 'value');

  constructor(private store: Store<State>) {}

  inc() {
    this.store.dispatch(Increment({ payload: 1 }));
  }

  dec() {
    this.store.dispatch(Decrement({ payload: 1 }));
  }

  ngOnInit(): void {}
}
