import { Component, OnInit } from "@angular/core";

import { RickAndMortyShowService } from "./rick-and-morty-show.service";
import { IRickAndMortyShowCharacter } from "./rick-and-morty-show-character";

@Component({
  selector: "app-rick-and-morty-show",
  templateUrl: "./rick-and-morty-show.component.html",
  styleUrls: ["./rick-and-morty-show.component.css"],
})
export class RickAndMortyShowComponent implements OnInit {
  apiUrl: string;
  characterList: IRickAndMortyShowCharacter[] = [];
  visiblecharacterList: IRickAndMortyShowCharacter[] = [];
  selectedFilters: string[] = [];
  details = {};
  filterObject = {};
  dataLoadMessage = {
    loading: "Data Loading",
    complete: "Data Loaded",
  };
  dataLoadedToastr = false;
  dataLoadingToastr = false;
  showLoader = true;
  speciesArr = ["human", "alien"];
  genderArr = ["male", "female", "unknown"];
  searchTerm = "";
  sortDefn = "asc";
  toastrMessage: string;

  constructor(private _rickAndMortyShowService: RickAndMortyShowService) {}

  ngOnInit() {
    this.loadData();
  }

  showHideToastr(type: string, toDisplay: boolean): void {
    if (type === "loading") {
      this.dataLoadingToastr = toDisplay;
    } else if (type === "complete") {
      this.dataLoadedToastr = toDisplay;
    }
    this.toastrMessage = this.dataLoadMessage[type];
  }

  loadData(): void {
    this.showHideToastr("loading", true);
    this._rickAndMortyShowService
      .getRickAndMortyCharactersList(this.apiUrl)
      .subscribe(
        (data) => this.getSuccess(data),
        (error) => this.getError(error)
      );
  }

  getSuccess(data: Object) {
    this.details = data;
    this.characterList = this.characterList.concat(data["results"]);
    this.visiblecharacterList = this.characterList.slice();
    this.showHideToastr("loading", false);
    this.showLoader = false;
  }

  onScroll(): void {
    if (this.details["info"]["next"]) {
      this.apiUrl = this.details["info"]["next"];
      this.loadData();
    } else {
      this.showHideToastr("complete", true);
      setTimeout(() => this.showHideToastr("complete", false), 3000);
    }
  }

  getError(error: any) {
    this.dataLoadingToastr = true;
    this.showHideToastr("loading", false);
    this.showHideToastr("complete", false);
  }

  searchEpisodes(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterEpisodes(this.filterObject);
  }

  sortEpisodes(sortDefinition: string): void {
    this.sortDefn = sortDefinition;
    const ascending = (a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    };
    const descending = (a, b) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    };
    if (sortDefinition === "asc") {
      this.visiblecharacterList = this.visiblecharacterList
        .slice()
        .sort(ascending);
    } else {
      this.visiblecharacterList = this.visiblecharacterList
        .slice()
        .sort(descending);
    }
  }

  filterEpisodes(filterObj: Object) {
    this.filterObject = filterObj;
    this.selectedFilters = [].concat(
      filterObj["species"],
      filterObj["gender"],
      filterObj["origin"]
    );

    this.visiblecharacterList = this.characterList.filter((character) => {
      const speciesFilterCondition = this.speciesFilterCheck(
        filterObj["species"],
        character.species.toLowerCase()
      );
      const genderFilterCondition = this.genderFilterCheck(
        filterObj["gender"],
        character.gender.toLowerCase()
      );
      const searchTermCondition = this.searchTermCheck(
        character.name.toLowerCase()
      );
      if (
        speciesFilterCondition &&
        genderFilterCondition &&
        searchTermCondition
      ) {
        return true;
      }
      return false;
    });
    this.sortEpisodes(this.sortDefn);
  }

  speciesFilterCheck(filteredSpeciesArr: any[], charSpecies: string): boolean {
    if (filteredSpeciesArr.includes(charSpecies)) {
      return true;
    } else if (this.speciesArr.includes(charSpecies)) {
      return false;
    } else if (filteredSpeciesArr.includes("other")) {
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

  searchTermCheck(characterName: string) {
    if (!this.searchTerm) {
      return true;
    } else if (characterName.includes(this.searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  }

  trackByFn(index, item) {
    return index;
  }
}
