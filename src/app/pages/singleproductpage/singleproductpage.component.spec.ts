import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproductpageComponent } from './singleproductpage.component';

describe('SingleproductpageComponent', () => {
  let component: SingleproductpageComponent;
  let fixture: ComponentFixture<SingleproductpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleproductpageComponent]
    });
    fixture = TestBed.createComponent(SingleproductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
