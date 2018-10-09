import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfilePage } from './home-profile.page';

describe('HomeProfilePage', () => {
  let component: HomeProfilePage;
  let fixture: ComponentFixture<HomeProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
