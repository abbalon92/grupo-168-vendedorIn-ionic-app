import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationPage } from './contact-information.page';

describe('ContactInformationPage', () => {
  let component: ContactInformationPage;
  let fixture: ComponentFixture<ContactInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
