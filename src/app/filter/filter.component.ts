import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filterEpisodesBasedOnSpecies = new EventEmitter<any>();
  @Output() filterEpisodesBasedOnGender = new EventEmitter<any>();
  @Output() filterEpisodesBasedOnOrigin = new EventEmitter<any>();
  @ViewChild('speciesForm') public speciesForm: NgForm;
  @ViewChild('genderForm') public genderForm: NgForm;
  @ViewChild('originForm') public originForm: NgForm;
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
  origin = {
    earthC137: true,
    earthReplacementDivision: true,
    abadango: true,
    other: true
  };

  constructor() { }

  ngOnInit() {
    this.listeningForChangesInFilter();
  }

  listeningForChangesInFilter(): void {
    this.speciesForm.valueChanges.subscribe(species => {
      const speciesArr = [];
      Object.keys(species).forEach(key => {
        if (species[key]) {
          speciesArr.push(key);
        }
      });
      this.filterEpisodesBasedOnSpecies.emit(speciesArr);
    });
    this.genderForm.valueChanges.subscribe(gender => {
      const genderArr = [];
      Object.keys(gender).forEach(key => {
        if (gender[key]) {
          genderArr.push(key);
        }
      });
      this.filterEpisodesBasedOnGender.emit(genderArr);
    });
    this.originForm.valueChanges.subscribe(origin => {
      const originArr = [];
      Object.keys(origin).forEach(key => {
        if (origin[key]) {
          if (key === 'earthC137') {
            originArr.push('earth (c-137)');
          } else if (key === 'earthReplacementDivision') {
            originArr.push('earth (replacement dimension)');
          } else {
            originArr.push(key);
          }
        }
      });
      this.filterEpisodesBasedOnOrigin.emit(originArr);
    });
  }

}
