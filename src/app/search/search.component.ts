import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  @Output() searchEpisodes = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchEpisode(): void {
    this.searchEpisodes.emit(this.searchTerm);
  }

}
