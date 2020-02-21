// import { TestBed } from '@angular/core/testing';

// import { SongsDaoProvider } from './songs-dao';
// import { DataStorageProvider } from '../data-storage/data-storage';
// import { SongsService } from 'src/app/services/songs.service';
// import { Storage } from '@ionic/storage';

// describe('SongsDaoProvider', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//       declarations: [],
//       providers: [
//         SongsService,
//         DataStorageProvider,
//         {provide: Storage, useValue: null}
//       ]
//   }));

//   it('should be created', () => {
//     const provider: SongsDaoProvider = TestBed.get(SongsDaoProvider);
//     expect(provider).toBeTruthy();
//   });

//   it('shold do search by number', () => {
//     const provider: SongsDaoProvider = TestBed.get(SongsDaoProvider);
//     expect(provider.getSongs()).toBeTruthy();
//     console.log(provider.getSongs());
//     expect(provider.getSongs().length).toBeGreaterThan(0);
//   });
// });
