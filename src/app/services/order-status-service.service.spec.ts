import { TestBed } from '@angular/core/testing';

import { OrderStatusServiceService } from './order-status-service.service';

describe('OrderStatusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderStatusServiceService = TestBed.get(OrderStatusServiceService);
    expect(service).toBeTruthy();
  });
});
