import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Product } from '../card';
import { CardService } from '../card.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // search: any;

  constructor(private us: UserService,
    private cardService: CardService) { }
  searchTerm: boolean;
  products: Product[] = [];
   
  ngOnInit() {
    // this.getProducts();
  }
  
  // getProducts() {
  //   // this.products = this.cardService.getCardsFromService().
  //   this.cardService.getCardsFromService().subscribe(productslist => this.products = productslist);
  //   this.us.isLoggedIn.subscribe(n => n = this.searchTerm);
  //   console.log(this.searchTerm);
  // }
  // getSearch() {
  //   this.search.setsearchWord(this.searchTerm);
  //   console.log(this.searchTerm);
  // }
}
