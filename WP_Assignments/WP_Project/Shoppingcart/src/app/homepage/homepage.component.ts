import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CardService } from '../card.service';
import { Product } from '../card';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';
// import {MatGridListModule} from '@angular/material/grid-list';
// import { SearchService } from '../search.service';
var cardArray: any[];
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cards;
  constructor(private cardService:CardService,
    private search:SearchService) {
      this.getCards();
     }

  ngOnInit() {
    this.getCards();
    // this.getSearchFromService();
  }

  prodT: String[] = [];
  searchTerm: string;
  getCards() {
    this.cardService.getCardsFromService().subscribe((cArray) => { while((cardArray === undefined)) cardArray = cArray; this.cards = cArray; this.loadIt(); console.log(cardArray)});
    // console.log(this.cardArray);
  }
  getSearchFromService() {
    this.searchTerm = this.search.getsearchTerm();
  }
  loadIt() {
    for (var i = 0; i < cardArray.length;i++) {
      this.prodT.push(cardArray[i].productTitle);
    }
    console.log(this.prodT);
  }
}

@Pipe(
  {name : 'filterByName'}
)
export class filterNames implements PipeTransform {
  constructor(private cs:CardService) {

  }
  transform(listOfNames: string[],nameToFilter: string): number[] {
   
    if (!listOfNames || !nameToFilter) return null;
    
    // console.log(listOfNames.filter(n => n.toLowerCase().indexOf(nameToFilter.toLowerCase()) !== -1));
    // var cards:any;
    listOfNames = listOfNames.filter(n => n.toLowerCase().indexOf(nameToFilter.toLowerCase()) !== -1)
    // this.cs.getCardsFromService().subscribe((x) => {while( {cards = x; console.log(x)}});
    // console
    var cards = cardArray;
    cards = cards.filter(card => listOfNames.includes(card.productTitle));
    var indexArray:number[] = [];
    cards.forEach(card => indexArray.push(cardArray.indexOf(card)));
    return indexArray;
  }
}
