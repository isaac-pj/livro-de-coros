import { Injectable } from '@angular/core';
import { DataStorageProvider } from '../data-storage/data-storage';
import { Songs } from '../../models/songs.model';
import { SongsService } from '../../services/songs.service';

/*
  Generated class for the SetupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({ providedIn: 'root' })
export class SetupProvider {

  private songs: Array<Songs>;

  constructor(
    public dataStorageProvider: DataStorageProvider,
    private songsService: SongsService
  ) {
    console.log('Hello SetupProvider Provider');
    // this.start();
  }

  // inicializa a primeira vez pegando do arquivo
  start() {
    // Songs
    this.check('Songs', () => this.songsService.getSongs());
    // Lists
    this.check('Lists', () => []);
  }

  check(collection, resolve) {
    console.log('Hello check');
    this.dataStorageProvider.get(collection).then((value) => {
      if (!value) { this.populate(collection, resolve); }
    }).catch((error) => {
      console.log(error);
    });
  }

  populate(key, resolve) {
    console.log('não tem dados');
    this.dataStorageProvider.insert(key, resolve());
  }
}
