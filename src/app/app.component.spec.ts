import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'app' component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TV Shows'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TV Shows');
  });

  it(`should render 'Rick and Morty' link in the navbar at the top`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const rickAndMortyRouteHeader = fixture.debugElement.query(By.css('a[routerLink*="/rick-and-morty"]')).nativeElement.innerText;
    expect(rickAndMortyRouteHeader).toEqual('Rick and Morty');
  });
});
