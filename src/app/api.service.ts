import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const localUrl ="assets/data/character.json"; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {
    console.log("API Working success");
   } //Injecting the client module to angular service

  getCharacters() {
    console.log("inside function");
    return this.http.get(localUrl); //get the data from the JSON file
  }
}
