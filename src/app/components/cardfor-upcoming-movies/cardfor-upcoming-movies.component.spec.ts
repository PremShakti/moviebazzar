import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardforUpcomingMoviesComponent } from './cardfor-upcoming-movies.component';

describe('CardforUpcomingMoviesComponent', () => {
  let component: CardforUpcomingMoviesComponent;
  let fixture: ComponentFixture<CardforUpcomingMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardforUpcomingMoviesComponent]
    });
    fixture = TestBed.createComponent(CardforUpcomingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
