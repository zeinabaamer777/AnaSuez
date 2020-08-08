import { TestBed, async, inject } from '@angular/core/testing';

import { ReqularCustomerGuard } from './reqular-customer.guard';

describe('ReqularCustomerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqularCustomerGuard]
    });
  });

  it('should ...', inject([ReqularCustomerGuard], (guard: ReqularCustomerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
