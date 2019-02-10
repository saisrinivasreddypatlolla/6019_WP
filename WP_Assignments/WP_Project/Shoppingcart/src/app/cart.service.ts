import { Injectable } from '@angular/core';
import { Product } from './card';
import { CARDS } from './mock-cards';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
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
  email
  getUserEmail(email){
    console.log(email);
    this.email = email;
  }
  getEmail(){
    // console.log(t)
    return this.email;
  }
  ads;
  addAddress(address,city,state,post,country){
    console.log("adding address");
    var add={address:address,city:city,state:state,postcode:post,country:country,email:this.email};
    this.http.put('http://127.0.0.1:3000/saveAdd',add).subscribe(x => this.ads=x);
  }
  getCart() {
    return this.cartArray;
  }
  abc
  updateData(cart){
    // for(var i=0;i<this.cartArray.length;i++){
      console.log(cart);
      const headers=new HttpHeaders()
      .set('Authorization','my-auto-token')
      .set('Content-Type','application/json');
      this.http.put('http://127.0.0.1:3000/update',cart,{
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });
    // }
    console.log(cart);
    
  }
  
  


}
