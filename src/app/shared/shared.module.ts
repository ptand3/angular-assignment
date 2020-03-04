import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe' ;

@NgModule({
  declarations: [ //components that we declare in shared is private to the local module
    SearchPipe,
    FilterPipe,
    SortPipe

  ],
  imports: [ //for ng-directives
    CommonModule
  ],
  exports:[       //make the component, directive available to other modules as public
    SearchPipe,
    SortPipe,
    FilterPipe
   ]
})
export class SharedModule { }
