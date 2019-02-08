import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: any;
  flagForMessage: boolean = false;
  review=false;
  reviewSubmit=false;
  username:string;
  ucomment:string;
  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private cartService: CartService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.cardService.getCardsFromService().subscribe(productslist => this.data = productslist[id]);
  }

  addToCart(num: number) {
    this.cartService.addToCartInService(num);
    this.flagForMessage = true;
    alert("Successfully item added to the cart");
    
  }
  reviews(){
    this.review=true;
    this.reviewSubmit=false;
  }
  reviewSubmits(){
    this.review=false;
    this.reviewSubmit=true;
  }
}
