import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  sortDefinition = 'select';
  @Output() sortEpisodes = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sortList() {
    this.sortEpisodes.emit(this.sortDefinition);
  }

}
