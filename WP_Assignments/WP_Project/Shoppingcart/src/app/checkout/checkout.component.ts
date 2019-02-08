import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../card';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private http: HttpClient) { }
  cartsArray: Product[] = [];
  totalQuantity: number = 0;
  country: string;
  address: string;
  city: string;
  state: string;
  post: string;

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
  }

  checkuser() {
    var obj = {addr:[this.address, this.city, this.state, this.post, this.country]};
    this.http.post('http://127.0.0.1:3000/address', obj).subscribe(next => console.log(next));
  }
}
