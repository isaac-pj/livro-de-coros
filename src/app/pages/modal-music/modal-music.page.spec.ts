import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMusicPage } from './modal-music.page';

describe('ModalMusicPage', () => {
  let component: ModalMusicPage;
  let fixture: ComponentFixture<ModalMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMusicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
