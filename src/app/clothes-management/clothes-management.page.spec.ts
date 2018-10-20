import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesManagementPage } from './clothes-management.page';

describe('ClothesManagementPage', () => {
  let component: ClothesManagementPage;
  let fixture: ComponentFixture<ClothesManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
