import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform is called all times if pure is set to false
  // transform is called 
  // whenever object changed if pure set to true
  transform(items: any, searchText: string): any[] {  //seearch Text to search/filter the records
    if(!items)return[];
    if(!searchText) return items;

    return items.filter( item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }
}

