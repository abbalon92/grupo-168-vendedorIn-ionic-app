import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoryStandInfoPage } from './auditory-stand-info.page';

describe('AuditoryStandInfoPage', () => {
  let component: AuditoryStandInfoPage;
  let fixture: ComponentFixture<AuditoryStandInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoryStandInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoryStandInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
