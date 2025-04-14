import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssesmentComponent } from './quality-assesment.component';

describe('QualityAssesmentComponent', () => {
  let component: QualityAssesmentComponent;
  let fixture: ComponentFixture<QualityAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssesmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
