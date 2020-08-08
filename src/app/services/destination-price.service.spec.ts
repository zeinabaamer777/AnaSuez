import { TestBed } from '@angular/core/testing';

import { DestinationPriceService } from './destination-price.service';

describe('DestinationPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinationPriceService = TestBed.get(DestinationPriceService);
    expect(service).toBeTruthy();
  });
});
