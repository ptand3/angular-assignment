import { Injectable } from '@angular/core';
import { CardItem } from '../models/card-item';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CardService {
 

  //Getting the API data of local json file  throught http Client
  //Creating the card methods that can be injected in multiple components.

  cardItems: CardItem[] = []; //hold the response from data subscription

  constructor(private http: HttpClient) { }


  //getting the response of the type
  getCardItem(): Observable<HttpResponse<CardItem[]>> {
    return this.http.get<CardItem[]>('assets/data.json', { observe: 'response' });
  }

  //Search CardItem by Name 
  //Publishing the method of the Observable instance 
  //that will be subscribe in search Component
  
   searchCardItem(q: string):Observable<HttpResponse<CardItem[]>> {
    console.log("Searching products");
    return this.http.get<CardItem[]>('assets/data.json', { observe: 'response' });
   
  }
 
}
