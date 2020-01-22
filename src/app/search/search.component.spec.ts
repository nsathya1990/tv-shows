import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchEl: DebugElement;
  let submitEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchEl = fixture.debugElement.query(By.css('input'));
    submitEl = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it(`should create 'search' component`, () => {
    expect(component).toBeTruthy();
  });

  /* it(`entering a search string and clicking 'Search' button emits 'searchEpisodes' event`, () => {
    let searchStr: string;
    searchEl.nativeElement.value = 'Beth';
    component.searchEpisodes.subscribe((value: string) => searchStr = value);

    submitEl.triggerEventHandler('click', null);
    expect(searchStr).toBe('Beth');
  }); */

});
