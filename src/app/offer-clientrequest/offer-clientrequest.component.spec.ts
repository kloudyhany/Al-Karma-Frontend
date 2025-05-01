import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferClientrequestComponent } from './offer-clientrequest.component';

describe('OfferClientrequestComponent', () => {
  let component: OfferClientrequestComponent;
  let fixture: ComponentFixture<OfferClientrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferClientrequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferClientrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
