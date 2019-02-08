import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchTermOfService: string;

  getsearchTerm() {
    return this.searchTermOfService;
  }

  setsearchWord(num: string) {
    this.searchTermOfService = num;
  }
}
