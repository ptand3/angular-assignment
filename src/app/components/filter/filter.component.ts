import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from "@angular/core";
import { SortPipe } from "../../shared/pipes/sort.pipe";
import { CardItem } from 'src/app/card/models/card-item';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardService } from "../../card/services/card.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  filter = { male: true, female: true };
  cardItems : CardItem[] =[];
  filteredCardItems: CardItem[] = [];
  constructor(private cardService : CardService) {

  }

  getChanged(){
    console.log("successfully changed");
  }
  getGender() {
    console.log("filter selected");
    console.log(this.filter);
    this.filteredCardItems = this.cardItems.filter(item =>
      (item.gender === 'female' && this.filter.female)
      || (item.gender === 'male' && this.filter.male)
    );
  }
  ngOnInit() {
  }

}
