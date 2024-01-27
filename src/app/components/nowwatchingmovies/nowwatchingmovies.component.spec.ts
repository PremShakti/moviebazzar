import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowwatchingmoviesComponent } from './nowwatchingmovies.component';

describe('NowwatchingmoviesComponent', () => {
  let component: NowwatchingmoviesComponent;
  let fixture: ComponentFixture<NowwatchingmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowwatchingmoviesComponent]
    });
    fixture = TestBed.createComponent(NowwatchingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
