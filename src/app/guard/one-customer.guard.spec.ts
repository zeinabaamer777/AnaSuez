import { TestBed, async, inject } from '@angular/core/testing';

import { OneCustomerGuard } from './one-customer.guard';

describe('OneCustomerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneCustomerGuard]
    });
  });

  it('should ...', inject([OneCustomerGuard], (guard: OneCustomerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
