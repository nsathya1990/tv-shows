import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RickAndMortyShowComponent } from './rick-and-morty-show.component';
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from '../search/search.component';
import { SortComponent } from '../sort/sort.component';
import { RickAndMortyShowCharacterComponent } from './rick-and-morty-show-character/rick-and-morty-show-character.component';
import { CreatedDateTransformPipe } from './rick-and-morty-show-pipe';

describe('RickAndMortyShowComponent', () => {
  let component: RickAndMortyShowComponent;
  let fixture: ComponentFixture<RickAndMortyShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreatedDateTransformPipe,
        FilterComponent,
        RickAndMortyShowCharacterComponent,
        RickAndMortyShowComponent,
        SearchComponent,
        SortComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create 'rick-and-morty-show' component`, () => {
    expect(component).toBeTruthy();
  });
});
