/*Modules is a logical collection of components, 
Directives, pipes , services ,dependencies to other modules 
*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardModule } from './card/card.module';
import {SharedModule} from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ ReactiveFormsModule} from "@angular/forms";
import { FilterComponent } from './components/filter/filter.component';


@NgModule({  //Meta data abbout the module

  imports: [      //other module dependencies 
    BrowserModule ,
    CardModule,
    SharedModule,
    FormsModule,
    HttpClientModule, //HTTp client is ready to use or inject with angular component,
  ],
  declarations:[ //components, pipes and directives 
   AppComponent, 
   HeaderComponent, 
   FilterComponent
  ],
  providers:[

  ],
  bootstrap:[
    AppComponent
  ],
  exports:[
    FilterComponent
  ]

})

export class AppModule {

}