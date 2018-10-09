import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSellerPage } from './check-seller.page';

describe('CheckSellerPage', () => {
  let component: CheckSellerPage;
  let fixture: ComponentFixture<CheckSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSellerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
