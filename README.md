
# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Components Division

- Create a card module
  ng g module card

- create the components inside card module 
ng g c card/components/card 
ng g c card/components/card-list

-Create the models for the card
ng g class card/models/card-item

-created the service for the card module that will be injected through depedency injection
ng g service card/services/card-services

 - Components to be used in our app
   header
   filter
   search-box Component
   sort component
   selected-filters component

//   READ JSON File through angular http client in card  service ts file
//In the shared folder we will create the  following
- custom directives to make the all the headings white or show some css
- use filter and sort pipes to implement the filter and sortinf functionality
- we will implement the search functionality on the card component by creating card search component


//USe of reactive form in card search component