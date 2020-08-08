import { TestBed, async, inject } from '@angular/core/testing';

import { SalesSupportGuard } from './sales-support.guard';

describe('SalesSupportGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesSupportGuard]
    });
  });

  it('should ...', inject([SalesSupportGuard], (guard: SalesSupportGuard) => {
    expect(guard).toBeTruthy();
  }));
});
