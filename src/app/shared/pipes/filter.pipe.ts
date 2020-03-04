import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
}) 

export class FilterPipe implements PipeTransform {
  transform(items: any[],
    fieldName: string,
    category: string,
    value: any): any[] {
    console.log("filter pipe called");
    console.log(fieldName);
    if (!items || !fieldName || !value) {
      return items;
    }

    if(items){
      console.log("species selected ", fieldName);
      return items.filter(function (item: any): boolean {
        return item.species;
      });
    }
     
    }
  }
