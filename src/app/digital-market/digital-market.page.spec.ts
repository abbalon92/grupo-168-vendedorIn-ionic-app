import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketPage } from './digital-market.page';

describe('DigitalMarketPage', () => {
  let component: DigitalMarketPage;
  let fixture: ComponentFixture<DigitalMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMarketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
