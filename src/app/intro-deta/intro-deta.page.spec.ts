import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDetaPage } from './intro-deta.page';

describe('IntroDetaPage', () => {
  let component: IntroDetaPage;
  let fixture: ComponentFixture<IntroDetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroDetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroDetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
