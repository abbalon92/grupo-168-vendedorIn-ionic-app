import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItManagementPage } from './it-management.page';

describe('ItManagementPage', () => {
  let component: ItManagementPage;
  let fixture: ComponentFixture<ItManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
