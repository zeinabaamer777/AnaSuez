import { TestBed } from '@angular/core/testing';

import { ReportDTService } from './report-dt.service';

describe('ReportDTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportDTService = TestBed.get(ReportDTService);
    expect(service).toBeTruthy();
  });
});
