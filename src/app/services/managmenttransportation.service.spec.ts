import { TestBed } from '@angular/core/testing';

import { ManagmenttransportationService } from './managmenttransportation.service';

describe('ManagmenttransportationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagmenttransportationService = TestBed.get(ManagmenttransportationService);
    expect(service).toBeTruthy();
  });
});
