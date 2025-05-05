import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideprofileComponent } from './rightsideprofile.component';

describe('RightsideprofileComponent', () => {
  let component: RightsideprofileComponent;
  let fixture: ComponentFixture<RightsideprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightsideprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightsideprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
