import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBackupPage } from './modal-backup.page';

describe('ModalBackupPage', () => {
  let component: ModalBackupPage;
  let fixture: ComponentFixture<ModalBackupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBackupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBackupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
