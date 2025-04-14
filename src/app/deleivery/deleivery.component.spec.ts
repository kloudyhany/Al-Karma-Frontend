import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleiveryComponent } from './deleivery.component';

describe('DeleiveryComponent', () => {
  let component: DeleiveryComponent;
  let fixture: ComponentFixture<DeleiveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleiveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleiveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
