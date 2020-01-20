import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RickAndMortyShowComponent } from './rick-and-morty-show/rick-and-morty-show.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HomeComponent } from './home/home.component';
import { RickAndMortyShowCharacterComponent } from './rick-and-morty-show/rick-and-morty-show-character/rick-and-morty-show-character.component';
import { SearchComponent } from './search/search.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { CreatedDateTransformPipe } from './rick-and-morty-show/rick-and-morty-show-pipe';

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyShowComponent,
    UnderConstructionComponent,
    HomeComponent,
    RickAndMortyShowCharacterComponent,
    SearchComponent,
    SortComponent,
    FilterComponent,
    CreatedDateTransformPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
