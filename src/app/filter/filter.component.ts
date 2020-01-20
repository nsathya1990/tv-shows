import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filterEpisodes = new EventEmitter<any>();
  @ViewChild('speciesForm') public speciesForm: NgForm;
  @ViewChild('genderForm') public genderForm: NgForm;
  species = {
    human: true,
    alien: true,
    other: true
  };
  gender = {
    male: true,
    female: true,
    unknown: true
  };
  speciesArr: string[] = [];
  genderArr: string[] = [];
  filterObj = {
    species: [],
    gender: [],
  };

  constructor() { }

  ngOnInit() {
    this.listeningForChangesInFilter();
  }

  listeningForChangesInFilter(): void {

    this.speciesForm.valueChanges.subscribe(species => {
      this.speciesArr = [];
      Object.keys(species).forEach(key => {
        if (species[key]) {
          this.speciesArr.push(key);
        }
      });
      this.filterObj.species = this.speciesArr;
      this.filterEpisodes.emit(this.filterObj);
    });

    this.genderForm.valueChanges.subscribe(gender => {
      this.genderArr = [];
      Object.keys(gender).forEach(key => {
        if (gender[key]) {
          this.genderArr.push(key);
        }
      });
      this.filterObj.gender = this.genderArr;
      this.filterEpisodes.emit(this.filterObj);
    });
  }

}
