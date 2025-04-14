import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechinicalComponent } from './techinical.component';

describe('TechinicalComponent', () => {
  let component: TechinicalComponent;
  let fixture: ComponentFixture<TechinicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechinicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
