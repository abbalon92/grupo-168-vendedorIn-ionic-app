import { TestBed, inject } from '@angular/core/testing';

import { StandSellerService } from './stand-seller.service';

describe('StandSellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandSellerService]
    });
  });

  it('should be created', inject([StandSellerService], (service: StandSellerService) => {
    expect(service).toBeTruthy();
  }));
});
