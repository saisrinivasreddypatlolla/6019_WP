import { Component, OnInit, Input } from '@angular/core';
// import { CardService } from '../card.service';
import { Product } from '../card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cartsArray: Product[] = [];
  availArray: String[] = [];
  totalPrice: number = 0;
  ngOnInit() {
    this.printProduct();
    this.checkavailability();
    this.totalPriceF();
  }

  printProduct() {
    this.cartsArray = this.cartService.getCart();
    // console.log(this.cartsArray[0].uRQ);

  }

  checkavailability() {
    for (var i = 0; i < this.cartsArray.length;i++) {
      if (this.cartsArray[i].quantity >= this.cartsArray[i].uRQ) {
        this.availArray[i] = "In Stock";
      }
      else {
        this.availArray[i] = "Out of Stock";
      }
      // this.totalPrice += (this.cartsArray[i].price * this.cartsArray[i].uRQ);
    }
  }
  totalPriceF() {
    this.totalPrice = 0;
    for (var i = 0; i < this.cartsArray.length; i++) {
      this.totalPrice += (this.cartsArray[i].price * this.cartsArray[i].uRQ)
    }
  }
  delete(num:number){
    for (var i = 0; i < this.cartsArray.length;i++) {
      console.log(num+" "+this.cartsArray[i].prodId)
      if (this.cartsArray[i].prodId === num) {
        this.cartsArray.splice(i,1);
      }
  }
  this.totalPriceF();
}

}
