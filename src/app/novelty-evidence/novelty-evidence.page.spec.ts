import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveltyEvidencePage } from './novelty-evidence.page';

describe('NoveltyEvidencePage', () => {
  let component: NoveltyEvidencePage;
  let fixture: ComponentFixture<NoveltyEvidencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoveltyEvidencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveltyEvidencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
