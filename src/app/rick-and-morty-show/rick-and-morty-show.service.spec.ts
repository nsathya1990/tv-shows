import { TestBed } from '@angular/core/testing';

import { RickAndMortyShowService } from './rick-and-morty-show.service';

describe('RickAndMortyShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickAndMortyShowService = TestBed.get(RickAndMortyShowService);
    expect(service).toBeTruthy();
  });
});
