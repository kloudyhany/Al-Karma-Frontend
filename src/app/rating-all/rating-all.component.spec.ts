import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAllComponent } from './rating-all.component';

describe('RatingAllComponent', () => {
  let component: RatingAllComponent;
  let fixture: ComponentFixture<RatingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
