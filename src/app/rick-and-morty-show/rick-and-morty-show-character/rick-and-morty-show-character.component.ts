import { Component, OnInit, Input } from '@angular/core';

import { IRickAndMortyShowCharacter } from '../rick-and-morty-show-character';

@Component({
  selector: 'app-rick-and-morty-show-character',
  templateUrl: './rick-and-morty-show-character.component.html',
  styleUrls: ['./rick-and-morty-show-character.component.css']
})
export class RickAndMortyShowCharacterComponent implements OnInit {

  @Input() character: IRickAndMortyShowCharacter;

  constructor() { }

  ngOnInit() {
  }

}
