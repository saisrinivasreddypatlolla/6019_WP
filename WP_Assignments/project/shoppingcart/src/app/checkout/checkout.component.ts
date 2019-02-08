import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../card';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ CartComponent ]
})
export class CheckoutComponent implements OnInit {
  totalprice:number=0;
  productsArray: Product[] = [];
  constructor(private cartService: CartService,
    private cartcomponent:CartComponent) {
      // this.productsArray=this.cartService.
    }
  cartsArray: Product[] = [];
  totalQuantity: number = 0;
  confirmPage=false;
  checkOutPage=true;
  addL1:string;
  addL2:string;
  city:string;
  state:string;
  postcode:number;
  country:string;

  ngOnInit() {
    this.getCart();
    this.calculateItems();
  }

  getCart() {
    this.cartsArray = this.cartService.getCart(); 
  }

  calculateItems() {
    for (var i = 0; i < this.cartsArray.length; i++) {
      this.totalQuantity += this.cartsArray[i].uRQ;
    }
    for (var i = 0; i < this.cartsArray.length; i++) {
      this.totalprice += (this.cartsArray[i].price*this.cartsArray[i].uRQ);
    }
  }
  confirm(){

    this.confirmPage=true;
    this.checkOutPage=false;
  }
}
