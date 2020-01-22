import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SortComponent } from './sort.component';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;
  let selectEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    selectEl = fixture.debugElement.query(By.css('select'));
    fixture.detectChanges();
  });

  it(`should create 'sort' component`, () => {
    expect(component).toBeTruthy();
  });

  it(`selecting a value from the 'sort' dropdown should emit 'change' event`, () => {
    let sortType: string;
    component.sortEpisodes.subscribe((value: string) => sortType = value);

    selectEl.nativeElement.value = 'desc';
    selectEl.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(sortType).toBe('desc');
  });

});
