import { TestBed } from '@angular/core/testing';

import { ReqsignalrService } from './reqsignalr.service';

describe('ReqsignalrService', () => {
  let service: ReqsignalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqsignalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
