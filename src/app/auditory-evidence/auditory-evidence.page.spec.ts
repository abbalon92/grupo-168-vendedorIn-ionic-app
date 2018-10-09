import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoryEvidencePage } from './auditory-evidence.page';

describe('AuditoryEvidencePage', () => {
  let component: AuditoryEvidencePage;
  let fixture: ComponentFixture<AuditoryEvidencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoryEvidencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoryEvidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
