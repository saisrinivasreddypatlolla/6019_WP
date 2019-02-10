import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { Product } from './card';
// import { CARDS } from './mock-cards';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }
  // productArray: any[];
  products: any;
  getCardsFromService(): Observable<any> {
    // return of (CARDS);
    console.log("Reached get products");
    var obj = this.http.get('http://127.0.0.1:3000/getproducts');
    
    return obj;
  }

  // addtoCartInService(num: number) {
  //   this.cartArray.push(CARDS[num - 1]);
  // }
  rvs;
  putReviews(rev){
    console.log("Putting Revs")
    this.http.put('http://127.0.0.1:3000/putRevs',rev).subscribe(x => this.rvs=x);
  }
}
