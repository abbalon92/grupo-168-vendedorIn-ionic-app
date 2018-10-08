import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoryPage } from './auditory.page';

describe('AuditoryPage', () => {
  let component: AuditoryPage;
  let fixture: ComponentFixture<AuditoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
