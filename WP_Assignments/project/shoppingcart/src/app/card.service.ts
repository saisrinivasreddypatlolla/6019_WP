import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './card';
import { CARDS } from './mock-cards';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  cartArray: Product[] = [];

  getCardsFromService(): Observable<Product[]> {
    return of (CARDS);
  }

  addtoCartInService(num: number) {
    this.cartArray.push(CARDS[num - 1]);
  }
}
