import { TestBed } from '@angular/core/testing';

import { NxRibbonService } from './nx-ribbon.service';

describe('NxRibbonService', () => {
  let service: NxRibbonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxRibbonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
