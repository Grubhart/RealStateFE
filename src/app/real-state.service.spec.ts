import { TestBed } from '@angular/core/testing';

import { RealStateService } from './real-state.service';

describe('RealStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealStateService = TestBed.get(RealStateService);
    expect(service).toBeTruthy();
  });
});
