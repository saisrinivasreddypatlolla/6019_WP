import { Injectable } from '@angular/core';
import { Product } from './card';
import { CARDS } from './mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartArray: Product[] = [];
  
  addToCartInService(num: number) {
    for (var i = 0; i < this.cartArray.length; i++) {
      if (num === this.cartArray[i].prodId) {
        this.cartArray[i].uRQ += 1;
        return; 
      }
    }
    this.cartArray.push(CARDS[num - 1]);
  }

  getCart() {
    return this.cartArray;
  }
}
