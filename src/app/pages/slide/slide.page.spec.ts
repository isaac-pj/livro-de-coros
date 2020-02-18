import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePage } from './slide.page';

describe('SlidePage', () => {
  let component: SlidePage;
  let fixture: ComponentFixture<SlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
