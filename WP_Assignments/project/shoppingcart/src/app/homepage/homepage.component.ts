import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Product } from '../card';
import { SearchService } from '../search.service';
// import {MatGridListModule} from '@angular/material/grid-list';
// import { SearchService } from '../search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private cardService:CardService,
    private search:SearchService) { }

  ngOnInit() {
    this.getCards();
    this.getSearchFromService();
  }
  cardArray: Product[] = [];
  searchTerm: string;
  getCards() {
    this.cardService.getCardsFromService().subscribe(cardArray => this.cardArray = cardArray);
  }
  getSearchFromService() {
    this.searchTerm = this.search.getsearchTerm();
  }
}
