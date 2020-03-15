import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupsPage } from './backups.page';

describe('BackupsPage', () => {
  let component: BackupsPage;
  let fixture: ComponentFixture<BackupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
