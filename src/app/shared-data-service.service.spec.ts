import { TestBed } from '@angular/core/testing';

import { SharedDAtaServiceService } from './shared-data-service.service';

describe('SharedDAtaServiceService', () => {
  let service: SharedDAtaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDAtaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
