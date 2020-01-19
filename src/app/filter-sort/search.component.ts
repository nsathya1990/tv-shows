import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  @Output() searchEpisodes = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchEpisode(): void {
    console.log(this.searchTerm);
    this.searchEpisodes.emit(this.searchTerm);
  }

}
