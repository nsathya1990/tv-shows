import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RickAndMortyShowComponent } from './rick-and-morty-show/rick-and-morty-show.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HomeComponent } from './home/home.component';
import { RickAndMortyShowCharacterComponent } from './rick-and-morty-show/rick-and-morty-show-character/rick-and-morty-show-character.component';
import { SearchSortComponent } from './filter/search-sort/search-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyShowComponent,
    UnderConstructionComponent,
    HomeComponent,
    RickAndMortyShowCharacterComponent,
    SearchSortComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
