import { TestBed } from '@angular/core/testing';

import { ServiceProfileService } from './technical_service-profile.service';

describe('ServiceProfileService', () => {
  let service: ServiceProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
