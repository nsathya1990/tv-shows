import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RickAndMortyShowService } from './rick-and-morty-show.service';

describe('RickAndMortyShowService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RickAndMortyShowService]
  }));

  it(`should create 'rick-and-morty-show' service`, () => {
    const service: RickAndMortyShowService = TestBed.get(RickAndMortyShowService);
    expect(service).toBeTruthy();
  });

  it(`should have 'getRickAndMortyCharactersList' function`, () => {
    const service: RickAndMortyShowService = TestBed.get(RickAndMortyShowService);
    expect(service.getRickAndMortyCharactersList).toBeTruthy();
  });
});
