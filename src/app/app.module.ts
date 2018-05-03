import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JoyrideModule } from 'angular2-joyride';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    JoyrideModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
