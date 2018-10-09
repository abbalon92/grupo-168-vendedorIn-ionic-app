import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveltyDetailPage } from './novelty-detail.page';

describe('NoveltyDetailPage', () => {
  let component: NoveltyDetailPage;
  let fixture: ComponentFixture<NoveltyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoveltyDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveltyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
