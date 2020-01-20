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
  selectedFilters: string[] = [];
  showLoader = true;
  speciesArr = ['human', 'alien'];
  genderArr = ['male', 'female', 'unknown'];
  originArr = ['earth (c-137)', 'earth (replacement dimension)', 'abadango'];

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
    this.showLoader = false;
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
      this.visiblecharacterList = this.visiblecharacterList.slice().sort(ascending);
    } else {
      this.visiblecharacterList = this.visiblecharacterList.slice().sort(descending);
    }
  }

  filterEpisodes(filterObj: Object) {
    this.visiblecharacterList = this.characterList.filter(character => {

      const speciesFilterCondition = this.speciesFilterCheck(filterObj['species'], character.species.toLowerCase());
      const genderFilterCondition = this.genderFilterCheck(filterObj['gender'], character.gender.toLowerCase());
      const originFilterCondition = this.originFilterCheck(filterObj['origin'], character.origin.name.toLowerCase());

      if (speciesFilterCondition && genderFilterCondition && originFilterCondition) {
        return true;
      }
      return false;
    });
  }

  speciesFilterCheck(filteredSpeciesArr: any[], charSpecies: string): boolean {
    if (filteredSpeciesArr.includes(charSpecies)) {
      return true;
    } else if (this.speciesArr.includes(charSpecies)) {
      return false;
    } else if (filteredSpeciesArr.includes('other')) {
      return true;
    }
    return false;
  }

  genderFilterCheck(filteredGenderArr: any[], charGender: string): boolean {
    if (filteredGenderArr.includes(charGender)) {
      return true;
    }
    return false;
  }

  originFilterCheck(filteredOriginArr: any[], charOrigin: string): boolean {
    if (filteredOriginArr.includes(charOrigin)) {
      return true;
    } else if (this.originArr.includes(charOrigin)) {
      return false;
    } else if (filteredOriginArr.includes('other')) {
      return true;
    }
    return false;
  }

}
