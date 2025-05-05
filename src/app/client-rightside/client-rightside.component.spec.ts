import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRightsideComponent } from './client-rightside.component';

describe('ClientRightsideComponent', () => {
  let component: ClientRightsideComponent;
  let fixture: ComponentFixture<ClientRightsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientRightsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRightsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
