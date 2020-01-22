import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RickAndMortyShowCharacterComponent } from './rick-and-morty-show-character.component';
import { CreatedDateTransformPipe } from '../rick-and-morty-show-pipe';

describe('RickAndMortyShowCharacterComponent', () => {
  let component: RickAndMortyShowCharacterComponent;
  let fixture: ComponentFixture<RickAndMortyShowCharacterComponent>;
  let imageEl: DebugElement;
  let pipe: CreatedDateTransformPipe;
  const charac = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RickAndMortyShowCharacterComponent,
        CreatedDateTransformPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    pipe = new CreatedDateTransformPipe();
    fixture = TestBed.createComponent(RickAndMortyShowCharacterComponent);
    component = fixture.componentInstance;
    component.character = charac;
    imageEl = fixture.debugElement.query(By.css('img'));
    fixture.detectChanges();
  });

  it(`should create 'rick-and-morty-show-character' component`, () => {
    expect(component).toBeTruthy();
  });

  it('transform date pipe', () => {
    expect(pipe.transform('2017-11-04T18:50:21.651Z')).toBe(2);
  });

  it(`should have the image tag's alt attribute as the character name`, () => {
    fixture.detectChanges();
    expect(imageEl.nativeElement.getAttribute('alt')).toEqual('Morty Smith');
  });

});
