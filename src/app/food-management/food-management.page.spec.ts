import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodManagementPage } from './food-management.page';

describe('FoodManagementPage', () => {
  let component: FoodManagementPage;
  let fixture: ComponentFixture<FoodManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
