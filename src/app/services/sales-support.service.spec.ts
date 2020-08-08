import { TestBed } from '@angular/core/testing';

import { SalesSupportService } from './sales-support.service';

describe('SalesSupportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesSupportService = TestBed.get(SalesSupportService);
    expect(service).toBeTruthy();
  });
});
