// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomePage } from './home.page';
// import { SongsService } from 'src/app/services/songs.service';
// import { Storage } from '@ionic/storage';

// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { IonicModule, NavController, AlertController } from '@ionic/angular';
// import { SongsDaoProvider } from 'src/app/providers/songs-dao/songs-dao';
// import { Router } from '@angular/router';

// describe('HomePage', () => {
//   let component: HomePage;
//   let fixture: ComponentFixture<HomePage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomePage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         SongsService,
//         SongsDaoProvider,
//         {provide: Router, useValue: null},
//         {provide: AlertController, useValue: null},
//         {provide: NavController, useValue: null},
//         {provide: Storage, useValue: null}
//       ],
//       imports: [
//         FormsModule,
//         CommonModule,
//         BrowserModule,
//         IonicModule.forRoot({
//             _testing: true
//         }),
//       ]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// });
