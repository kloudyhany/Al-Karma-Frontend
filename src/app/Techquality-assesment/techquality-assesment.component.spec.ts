import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechqualityAssesmentComponent } from './techquality-assesment.component';

describe('TechqualityAssesmentComponent', () => {
  let component: TechqualityAssesmentComponent;
  let fixture: ComponentFixture<TechqualityAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechqualityAssesmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechqualityAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
