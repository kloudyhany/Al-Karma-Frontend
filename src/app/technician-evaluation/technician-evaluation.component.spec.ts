import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianEvaluationComponent } from './technician-evaluation.component';

describe('TechnicianEvaluationComponent', () => {
  let component: TechnicianEvaluationComponent;
  let fixture: ComponentFixture<TechnicianEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicianEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicianEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
