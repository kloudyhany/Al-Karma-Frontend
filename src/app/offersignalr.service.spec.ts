import { TestBed } from '@angular/core/testing';

import { OffersignalrService } from './offersignalr.service';

describe('OffersignalrService', () => {
  let service: OffersignalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersignalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
