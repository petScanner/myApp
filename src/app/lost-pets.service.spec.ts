import { TestBed, inject } from '@angular/core/testing';

import { LostPetsService } from './lost-pets.service';

describe('LostPetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LostPetsService]
    });
  });

  it('should be created', inject([LostPetsService], (service: LostPetsService) => {
    expect(service).toBeTruthy();
  }));
});
