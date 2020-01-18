import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyShowCharacterComponent } from './rick-and-morty-show-character.component';

describe('RickAndMortyShowCharacterComponent', () => {
  let component: RickAndMortyShowCharacterComponent;
  let fixture: ComponentFixture<RickAndMortyShowCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickAndMortyShowCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyShowCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
