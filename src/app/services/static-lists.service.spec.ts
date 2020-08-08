import { TestBed } from '@angular/core/testing';

import { StaticListsService } from './static-lists.service';

describe('StaticListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticListsService = TestBed.get(StaticListsService);
    expect(service).toBeTruthy();
  });
});
