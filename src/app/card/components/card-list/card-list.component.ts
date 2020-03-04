import { Component, OnInit } from '@angular/core';
import { CardItem } from "../../models/card-item";
import { CardService } from "../../services/card.service";


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor(private cardService: CardService) {
  }


  ngOnInit() {
    console.log("card list component created");
   
  }
}


