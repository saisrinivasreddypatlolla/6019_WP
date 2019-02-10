import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: any;
  flagForMessage: boolean = false;
  reviewRQ=false;
  userLogin=false;
  uname:string;
  ucomment:string;
  rating: string;
  review=false;
  // reviewSubmit=false;
  constructor(private route: ActivatedRoute,
    private cardService: CardService,
    private cartService: CartService) {
      console.log(this.rating);
     }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.cardService.getCardsFromService().subscribe(productslist => {this.data = productslist[id];
      console.log(this.data);
    });
    
  }

  addToCart(num: number) {
    this.cartService.addToCartInService(num);
    this.flagForMessage = true;
    // window.setInterval(function() {
    //   // this will execute every 5 minutes => show the alert here
    //   var popup = document.getElementById("myPopup");
    //   popup.classList.toggle("show");
    // }, 3000);
    // setTimeout(function(){ alert("Added to cart!!"); }, 3000);
    Swal.fire('Added to the cart!!!');
    
  }
  reviews(){
    this.review=true;
    // this.reviewSubmit=false;
  }
  // reviewSubmits(){
  //   this.review=false;
  //   this.reviewSubmit=true;
  // }
  serviceReview(){

    this.review=false;
    // this.reviewSubmit=true;
    var rev={body:this.ucomment,rating:this.rating,user:this.uname,id:this.data.prodId};
    this.cardService.putReviews(rev);
    window.location.reload();
    
  }
}
