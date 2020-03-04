import { Component, OnInit, Input } from '@angular/core';
import { CardItem } from "../../models/card-item";
import { CardService } from "../../services/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardItems: CardItem[] = [];
  searchText :string;
  fieldName : string;
 
  constructor(private cardService: CardService) { 
    this.cardService.getCardItem()  //Function to subscribe the data from card service
      .subscribe(resp => {
        for (let item of (resp.body) as any) {
          let result = item.results; 
          for (let data of (result as any)) {
            this.cardItems.push(data);
          }
        }
      });
  }

  getChange(){
    console.log("selected filter");
  }

  ngOnInit() {
    console.log("cart component created");
  }

}
