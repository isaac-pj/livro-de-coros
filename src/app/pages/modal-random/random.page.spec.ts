import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPage } from './random.page';

describe('RandomPage', () => {
  let component: RandomPage;
  let fixture: ComponentFixture<RandomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
