import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyShowComponent } from './rick-and-morty-show.component';

describe('RickAndMortyShowComponent', () => {
  let component: RickAndMortyShowComponent;
  let fixture: ComponentFixture<RickAndMortyShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickAndMortyShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
