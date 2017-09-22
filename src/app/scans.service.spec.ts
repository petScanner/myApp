import { TestBed, inject } from '@angular/core/testing';

import { ScansService } from './scans.service';

describe('ScansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScansService]
    });
  });

  it('should be created', inject([ScansService], (service: ScansService) => {
    expect(service).toBeTruthy();
  }));
});
