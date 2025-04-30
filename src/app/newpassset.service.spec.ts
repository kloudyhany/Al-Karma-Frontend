import { TestBed } from '@angular/core/testing';

import { NewpasssetService } from './newpassset.service';

describe('NewpasssetService', () => {
  let service: NewpasssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpasssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
