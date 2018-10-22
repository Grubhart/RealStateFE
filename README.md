# RealStateFE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

to run can use:

ng serve --open

the project show a single search form

you have only one textbox but you can make complex search using keywords:

stateName : state name i.e. New York, Florida, etc
stateAbr : state abreviature i.e NY, FL, CA, etc
streetAddress : street address i.e 55 cyril street
city : city name i.e. san francisco, miami, etc
zipCode : zipCode i.e 555555

you can combine different keywords 
example:
streetAddress=55;stateAbr=fl

that show all properties that have 55 in the street Address and being in Florida

also you can use a generic text to use a global search
example:
55  

that show any properties that have 55 in streetAddress, State, zip code , etc

you can combine them, and use multiple options for each criteria separated by comma "," example
55;stateAbr=NY,FL

have Fun!!!
