import { TestBed, inject } from '@angular/core/testing';

import { MyAuditService } from './my-audit.service';

describe('MyAuditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAuditService]
    });
  });

  it('should be created', inject([MyAuditService], (service: MyAuditService) => {
    expect(service).toBeTruthy();
  }));
});
