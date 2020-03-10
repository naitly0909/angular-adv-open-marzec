import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {
  search(query: string) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
