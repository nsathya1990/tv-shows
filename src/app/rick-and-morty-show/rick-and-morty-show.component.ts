import { Component, OnInit } from '@angular/core';

import { RickAndMortyShowService } from './rick-and-morty-show.service';
import { IRickAndMortyShowCharacter } from './rick-and-morty-show-character';

@Component({
  selector: 'app-rick-and-morty-show',
  templateUrl: './rick-and-morty-show.component.html',
  styleUrls: ['./rick-and-morty-show.component.css']
})
export class RickAndMortyShowComponent implements OnInit {

  characterList: IRickAndMortyShowCharacter[] = [];
  visiblecharacterList: IRickAndMortyShowCharacter[] = [];

  constructor(private _rickAndMortyShowService: RickAndMortyShowService) { }

  ngOnInit() {
    this._rickAndMortyShowService.getRickAndMortyCharactersList().subscribe(
      data => this.getSuccess(data['results']),
      error => this.getError(error)
    );
  }

  getSuccess(data: IRickAndMortyShowCharacter[]) {
    console.log(data);
    this.characterList = data.slice();
    this.visiblecharacterList = data.slice();
  }

  getError(error) {
    console.log(error);
  }

  searchEpisodes(searchTerm: string): void {
    this.visiblecharacterList = this.characterList.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  sortEpisodes(sortDefinition: string): void {
    const ascending = (a, b) => {
      if (a.id < b.id) { return -1; }
      if (a.id > b.id) { return 1; }
      return 0;
    };
    const descending = (a, b) => {
      if (a.id > b.id) { return -1; }
      if (a.id < b.id) { return 1; }
      return 0;
    };
    if (sortDefinition === 'asc') {
      this.visiblecharacterList = this.characterList.slice().sort(ascending);
    } else {
      this.visiblecharacterList = this.characterList.slice().sort(descending);
    }
  }

}
