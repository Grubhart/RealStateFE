import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RealStateComponent } from './real-state/real-state.component';
import {isMetadataImportedSymbolReferenceExpression} from '@angular/compiler-cli';


@NgModule({
  declarations: [
    AppComponent,
    RealStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
