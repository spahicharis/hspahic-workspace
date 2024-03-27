import { TestBed } from '@angular/core/testing';

import { NxLoadingSpinnerService } from './nx-loading-spinner.service';

describe('NxLoadingSpinnerService', () => {
  let service: NxLoadingSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxLoadingSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
