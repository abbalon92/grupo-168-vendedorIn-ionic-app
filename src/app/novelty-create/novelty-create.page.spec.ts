import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveltyCreatePage } from './novelty-create.page';

describe('NoveltyCreatePage', () => {
  let component: NoveltyCreatePage;
  let fixture: ComponentFixture<NoveltyCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoveltyCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveltyCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
