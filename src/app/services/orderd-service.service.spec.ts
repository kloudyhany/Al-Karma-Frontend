import { TestBed } from '@angular/core/testing';

import { OrderdServiceService } from './orderd-service.service';

describe('OrderdServiceService', () => {
  let service: OrderdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
