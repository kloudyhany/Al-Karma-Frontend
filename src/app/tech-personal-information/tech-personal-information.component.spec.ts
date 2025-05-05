import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPersonalInformationComponent } from './tech-personal-information.component';

describe('TechPersonalInformationComponent', () => {
  let component: TechPersonalInformationComponent;
  let fixture: ComponentFixture<TechPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechPersonalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
