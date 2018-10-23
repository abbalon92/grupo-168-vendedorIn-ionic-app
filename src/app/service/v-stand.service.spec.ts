import { TestBed, inject } from '@angular/core/testing';

import { VStandService } from './v-stand.service';

describe('VStandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VStandService]
    });
  });

  it('should be created', inject([VStandService], (service: VStandService) => {
    expect(service).toBeTruthy();
  }));
});
