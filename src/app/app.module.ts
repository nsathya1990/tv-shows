import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RickAndMortyShowComponent } from './rick-and-morty-show/rick-and-morty-show.component';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
