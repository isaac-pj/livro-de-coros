// import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { MusicPage } from './music.page';
// import { Storage } from '@ionic/storage';
// import { PopoverController, IonicModule, AlertController, NavController, ModalController } from '@ionic/angular';
// import { SongsService } from 'src/app/services/songs.service';
// import { ActivatedRoute, Router, Data, Params } from '@angular/router';
// import { SongsDaoProvider } from 'src/app/providers/songs-dao/songs-dao';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

// import { Observable, of } from 'rxjs';
// import { MockActivatedRoute } from 'src/app/mocks/activatedRoute.mock';

// describe('MusicPage', () => {
//   let component: MusicPage;
//   let fixture: ComponentFixture<MusicPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MusicPage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         SongsService,
//         SongsDaoProvider,
//         {provide: ActivatedRoute, useClass: MockActivatedRoute},
//         {provide: Router, useValue: null},
//         {provide: AlertController, useValue: null},
//         {provide: PopoverController, useValue: null},
//         {provide: NavController, useValue: null},
//         {provide: ModalController, useValue: null},
//         {provide: ChangeDetectorRef, useValue: null},
//         {provide: Storage, useValue: null},
//       ],
//       imports: [
//         FormsModule,
//         CommonModule,
//         BrowserModule,
//         IonicModule.forRoot({
//           _testing: true
//         }),
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MusicPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// });
