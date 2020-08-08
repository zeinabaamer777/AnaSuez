import { TestBed } from '@angular/core/testing';

import { OrderUsersService } from './order-users.service';

describe('OrderUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderUsersService = TestBed.get(OrderUsersService);
    expect(service).toBeTruthy();
  });
});
