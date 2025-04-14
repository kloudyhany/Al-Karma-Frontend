import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssesmentComponent } from './client-assesment.component';

describe('ClientAssesmentComponent', () => {
  let component: ClientAssesmentComponent;
  let fixture: ComponentFixture<ClientAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAssesmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
